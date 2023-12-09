import {BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import {AppService} from './app.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';
import { Express } from 'express';

@Controller('api')
export class AppController {
    constructor(
        private readonly appService: AppService,
        private jwtService: JwtService
    ) {
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