import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./User/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class AppService {
    constructor(
    ) {
    }
}