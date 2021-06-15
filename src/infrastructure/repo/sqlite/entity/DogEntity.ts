import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Dog {

    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    age!: number;
}