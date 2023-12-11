import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity('orders')
export class Order{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    buyer_id: number;
    @Column()
    seller_id: number;
    @Column()
    status: string;
    @CreateDateColumn()
    order_date: Date;
    

}
