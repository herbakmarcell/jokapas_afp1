import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    full_name: string;

}