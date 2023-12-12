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
    name: string;
    @Column()
    tag: string;
    @Column()
    price: number;
    @Column()
    itemstatus: string;
    @Column()
    region: string;
    @Column()
    year: number;
    @Column()
    description: string;
    @CreateDateColumn()
    publish_date: Date;
    @CreateDateColumn()
    order_date: Date;
    @Column()
    status: string;
    

}
