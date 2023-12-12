import {BadRequestException, Body, Controller, Get, Param, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import {Response, Request} from 'express';
import { Express } from 'express';
import { SupportService } from './support.service';

@Controller('api')
export class SupportController {
    constructor(
        private readonly supportService: SupportService,
    ) {
    }

    @Get('tickets')
    async tickets(@Req() request: Request){
        return this.supportService.findAll()
    }

    @Get('tickets/:id')
    async getTicket(@Param('id') id: number) {
        return this.supportService.findOne(id);
    }
}
