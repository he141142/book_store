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
import { Shipper } from './shipper';
import { Role } from './role';
import { BookRank } from './bookRank';
import { UserRate } from './userRate';
import { Customer } from './customer';

@Entity('user', { schema: 'book_ds' })
export class User extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 225,
  })
  userName: string;

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  password: string;

  @Column('int', {
    nullable: true,
  })
  age: number;

  @Column('varchar', {
    length: 100,
  })
  email: string;

  @Column('varchar', {
    nullable: true,
    default: null,
  })
  phone: string;

  @Column('varchar', {
    nullable: true,
    default: null,
  })
  address: string;

  @Column('tinyint', {
    nullable: false,
  })
  isActive: boolean;

  @Column('varchar', {
    length: 45,
    default: '2323',
  })
  identityNumber: string;

  @Column('varchar', {
    length: 45,
    nullable: true,
    default: null,
  })
  socialInsurance: string;

  @Column('varchar', {
    nullable: true,
    default: null,
  })
  avatar: string;

  @Column('varchar', {})
  roleId!: string;

  @Column('varchar')
  customerId: string;

  @Column('varchar', {})
  shipperId: string;

  @OneToOne(() => Shipper, (shipper) => shipper.user)
  @JoinColumn({
    name: 'shipperId',
    referencedColumnName: 'id',
  })
  shipper!: Shipper;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({
    name: 'roleId',
    referencedColumnName: 'id',
  })
  role!: Role;

  @ManyToMany(() => BookRank, (bookRank) => bookRank.users)
  @JoinTable({
    name: 'userRate',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
  })
  bookRanks!: BookRank[];

  @OneToMany(() => UserRate, (userRate) => userRate.user)
  userRates!: UserRate[];

  @OneToOne(() => Customer, (customer) => customer.user)
  customer!: Customer;

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
