import {BadRequestException, Body, Controller, Get, Param, Post, Query, Req, Res, UnauthorizedException} from '@nestjs/common';
import {Response, Request} from 'express';
import { Express } from 'express';
import { ProductService } from './product.service';

@Controller('api')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) {
    }

    @Get('products')
    async products(@Req() request: Request){
        return this.productService.findAll();
    }

    @Get('products/:id')
    async getProduct(@Param('id') id: number) {
        return this.productService.findOne(id);
    }

    // @Get('product/gettag?')
    // async productsByTag(@Query('tags') tags: string[]){
    //     console.log(tags)

    //     const data = await this.productService.findAllByTag();
    //     let finalArr = []
    //     data.forEach((value,index) => {
    //         tags.forEach((tag,i) => {
    //             if(value.tag == tag){
    //                 finalArr.push(value)
    //             }
    //         })
    //     })
    //     console.log(data)
    //     return finalArr
    // }
}