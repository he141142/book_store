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
import { UserRate } from './userRate';

@Entity('bookRank', { schema: 'book_ds' })
export class BookRank extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {})
  bookId: string;

  @Column('int', {})
  sold: number;

  @Column('numeric', {
    precision: 4,
    scale: 2,
  })
  ratePoint!: number;

  @ManyToMany(() => User, (user) => user.bookRanks)
  @JoinTable({
    name: 'userRate',
    joinColumn: {
      name: 'bookRankId',
      referencedColumnName: 'id',
    },
  })
  users!: User[];

  @ManyToOne(() => Book, (book) => book.bookRanks)
  @JoinColumn({
    name: 'bookId',
    referencedColumnName: 'id',
  })
  book!: Book;

  @OneToMany(() => UserRate, (userRate) => userRate.bookRank)
  userRates!: UserRate[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
