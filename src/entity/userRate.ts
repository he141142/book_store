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
import { BookRank } from './bookRank';

@Entity('userRate', { schema: 'book_ds' })
export class UserRate extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  userRateId: string;

  @Column('varchar', {})
  userId!: string;

  @Column('varchar', {})
  bookRankId!: string;

  @Column('numeric', {
    precision: 4,
    scale: 2,
  })
  ratePoint: string;

  @Column('varchar', {
    name: 'rateComment',
  })
  rateComment: string;

  @ManyToOne(() => User, (user) => user.userRates)
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  user!: User;

  @ManyToOne(() => BookRank, (bookRank) => bookRank.userRates)
  @JoinColumn({
    name: 'bookRankId',
    referencedColumnName: 'id',
  })
  bookRank!: BookRank;

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
