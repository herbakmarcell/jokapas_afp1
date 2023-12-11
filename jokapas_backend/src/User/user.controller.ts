import {BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import {AppService} from '../app.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';
import { Express } from 'express';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {
    }

    @Post('register')
    async register(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('full_name') full_name: string
    ) {

        if(await this.userService.findOne({username})){
            throw new BadRequestException('Username already exists')
        }
        if(await this.userService.findByEmail(email)){
            throw new BadRequestException('Email is taken')
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await this.userService.create({
            username,
            email,
            password: hashedPassword,
            full_name
        });

        delete user.password;

        return user;
    }

    @Post('login')
    async login(
        @Body('username') username: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.userService.findOne({username});

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({id: user.user_id});

        response.cookie('jwt', jwt, {httpOnly: true});

        return{message:"success", user_id:user.user_id}
    }

    @Get('user')
    async user(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.userService.findOne({user_id: data['id']});

            const {password, ...result} = user;

            return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }
    
    // @Get('productcount')
    // async productcount(@Req() request: Request) {
    //     try {
    //         const {cookie} = request.cookies['jwt'];

    //         const data = await this.jwtService.verifyAsync(cookie);

    //         if (!data) {
    //             throw new UnauthorizedException();
    //         }

    //         const products = await this.appService.findProduct({product_id: data['product_id']});
    //         const productCount = products.productcount;
    //         return productCount;

            
    //     } catch (e) {
    //         throw new UnauthorizedException();
    //     }
    // }



    // @Get('productdesc')
    // async productdesc(@Req() request: Request) {
    //     try {
    //         const {cookie} = request.cookies['jwt'];

    //         const data = await this.jwtService.verifyAsync(cookie);

    //         if (!data) {
    //             throw new UnauthorizedException();
    //         }

    //         const products = await this.appService.findProduct({product_id: data['product_id']});
    //         const productdesc = products.description;
    //         return productdesc;

            
    //     } catch (e) {
    //         throw new UnauthorizedException();
    //     }
    // }

    // @Get('producttag')
    // async producttag(@Req() request: Request) {
    //     try {
    //         const {cookie} = request.cookies['jwt'];

    //         const data = await this.jwtService.verifyAsync(cookie);

    //         if (!data) {
    //             throw new UnauthorizedException();
    //         }

    //         const products = await this.appService.findProduct({product_id: data['product_id']});
    //         const producttag = products.tag;
    //         return producttag;

            
    //     } catch (e) {
    //         throw new UnauthorizedException();
    //     }
    // }


    // @Get('productname')
    // async productname(@Req() request: Request) {
    //     try {
    //         const {cookie} = request.cookies['jwt'];

    //         const data = await this.jwtService.verifyAsync(cookie);

    //         if (!data) {
    //             throw new UnauthorizedException();
    //         }

    //         const products = await this.appService.findProduct({product_id: data['product_id']});
    //         const productname = products.name;
    //         return productname;

            
    //     } catch (e) {
    //         throw new UnauthorizedException();
    //     }
    //}
}