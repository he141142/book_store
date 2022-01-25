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
import { User } from './user';

@Entity('customer', { schema: 'book_ds' })
export class Customer extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 50,
  })
  lastName: string;

  @Column('varchar', {
    nullable: true,
    length: 50,
  })
  firstName: string;

  @Column('varchar', {
    nullable: true,
    length: 100,
  })
  fullName: string;

  @OneToOne(() => User, (user) => user.customer)
  user!: User;

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
