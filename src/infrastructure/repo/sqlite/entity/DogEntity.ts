import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class Dog {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  age!: number;
}
