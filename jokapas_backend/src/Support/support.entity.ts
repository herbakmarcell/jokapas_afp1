import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity('tickets')
export class Ticket{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
    @Column()
    tag: string;
    @Column()
    description: string;
}
