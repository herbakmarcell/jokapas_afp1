import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    product_id: number;
    @Column()
    name: string;
    @Column()
    desc: string;
    @Column()
    tag: string;
    @Column()
    image: Blob;
    @Column()
    productcount : number;
    

}
