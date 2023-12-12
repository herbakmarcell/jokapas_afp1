import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Ticket } from './support.entity';
import { Observable, from } from 'rxjs';

@Injectable()
export class SupportService {
    constructor(
        @InjectRepository(Ticket) private supportRepository: Repository<Ticket>
    ) {
    }
    async findAll(): Promise<Ticket[]> {
        return this.supportRepository.find();
    }

    async findOne(id: number): Promise<Ticket> {
        return this.supportRepository.findOne({where: {id: id}});
    }

    async create(data: any): Promise<Ticket> {
        return this.supportRepository.save(data);
    }
}
