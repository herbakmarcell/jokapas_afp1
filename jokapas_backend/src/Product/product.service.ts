import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Any, Repository} from "typeorm";
import { Product } from './product.entity';
import { Observable, from } from 'rxjs';
import { SelectQueryBuilder } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ) {
    }
    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(id: number): Promise<Product> {
        return this.productRepository.findOne({where: {id: id}});
    }

    async findAllByTag(tag: string): Promise<Product[]> {
        return this.productRepository.find({where: {tag: tag}});
    }
}