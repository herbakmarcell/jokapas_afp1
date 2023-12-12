import {BadRequestException, Body, Controller, Get, Param, Post, Req, Res, UnauthorizedException, UseGuards} from '@nestjs/common';
import {Response, Request} from 'express';
import { Express } from 'express';
import { SupportService } from './support.service';
import { Roles } from 'src/Roles/roles.decorator';
import { Role } from 'src/Roles/roles.enum';
import { RolesGuard } from 'src/Roles/roles.guard';

@Controller('api')
export class SupportController {
    constructor(
        private readonly supportService: SupportService,
    ) {
    }

    @Get('tickets')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    async getTickets(@Req() request: Request){
        return this.supportService.findAll()
    }

    @Get('tickets/:id')
    async getTicket(@Param('id') id: number) {
        return this.supportService.findOne(id);
    }
}
