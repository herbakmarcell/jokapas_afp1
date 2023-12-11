import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    user_id: number;
    @Column()
    tag: string;
    @Column()
    price: number;
    @Column()
    status: string;
    @Column()
    region: string;
    @Column()
    year: number;
    @Column()
    description: string;
    @CreateDateColumn()
    publish_date: Date;
    

}
