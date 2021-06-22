import { Entity, Column, PrimaryColumn } from 'typeorm';
import IDogs from '../../../../domain/IDogs';

@Entity()
export default class Dog implements IDogs {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  age!: number;
}
