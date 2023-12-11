import {BadRequestException, Body, Controller, Get, Param, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import {Response, Request} from 'express';
import { Express } from 'express';
import { OrderService } from './order.service';

@Controller('api')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
    ) {
    }

    @Get('orders')
    async orders(@Req() request: Request){
        return this.orderService.findAll()
    }

    @Get('orders/:id')
    async getOrders(@Param('id') id: number) {
        return this.orderService.findOne(id);
    }
}