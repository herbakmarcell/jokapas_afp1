import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import { Product } from './product.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) {
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOne({where: condition});
    }

    async findProduct(condition: any): Promise<Product> {
        return this.productRepository.findOne({where: condition});
    }
}