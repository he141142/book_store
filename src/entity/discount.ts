import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseE } from '../base';
import { Publisher } from './publisher';
import { Book } from './book';
import { Customer } from './customer';

@Entity('discount', { schema: 'book_ds' })
export class Discount extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 50,
  })
  name: string;

  @Column('numeric', {
    precision: 2,
    scale: 2,
    default: 0,
  })
  value: number;

  @ManyToMany(() => Customer)
  @JoinTable()
  customers!: Customer[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
