import {BadRequestException, Body, Controller, Get, Param, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
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

    @Get('product/:tag')
    async productsByTag(@Param('tag') tag: string, @Req() request: Request){
        return this.productService.findAllByTag(tag);
    }
}