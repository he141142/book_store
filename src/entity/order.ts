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
import { Author } from './author';
import { Genres } from './genres';
import { Shipper } from './shipper';

@Entity('order', { schema: 'book_ds' })
export class Order extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  isbn: string;

  @Column('varchar', {
  })
  customerId: string;

  @Column('date', {
  })
  date: Date;

  @Column('varchar', {
  })
  discountId: string;

  @Column('varchar', {
  })
  shipperId: string;
  @Column('varchar', {
    length: 50,
  })
  state: string;

  @ManyToOne(() => Shipper, (shipper) => shipper.orders)
  @JoinColumn({
    name: 'shipperId',
    referencedColumnName: 'id',
  })
  shipper!: Shipper;

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
