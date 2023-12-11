import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Order } from './order.entity';
import { Observable, from } from 'rxjs';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>
    ) {
    }
    async findAll(): Promise<Order[]> {
        return this.orderRepository.find();
    }

    async findOne(oid: number): Promise<Order> {
        return this.orderRepository.findOne({where: {id: oid}});
    }
    async editOrder(oid:number, data: Order): Promise<Order>{
        await this.orderRepository.update(oid, data);
        return this.orderRepository.findOne({where: {id:oid}});
    }
}