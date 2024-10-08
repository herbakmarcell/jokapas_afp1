import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOne({where: condition});
    }

    async findByEmail(mail:string): Promise<User> {
        return this.userRepository.findOne({where: {email:mail}})
    }

    async findByUsername(username:string): Promise<User> {
        return this.userRepository.findOne({where: {username:username}})
    }

    async editUser(id:number, data: User): Promise<User>{
        await this.userRepository.update(id, data);
        return this.userRepository.findOne({where: {user_id:id}});
    }
}
