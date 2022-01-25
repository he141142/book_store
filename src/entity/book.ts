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
import { BookRank } from './bookRank';
import { UserRate } from './userRate';

@Entity('book', { schema: 'book_ds' })
export class Book extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 100,
  })
  userName: string;

  @Column('int', {
    nullable: false,
  })
  availableQuantity: number;

  @Column('numeric', {
    nullable: true,
    precision: 5,
    scale: 2,
    default: 0,
  })
  age: number;
  @Column('varchar', {})
  authorId: string;

  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  author: Author;

  @Column('date', {
    nullable: true,
    default: null,
  })
  publicationDate: Date;
  @Column({})
  publisherId: string;

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  publisher!: Publisher;

  @ManyToMany(() => Genres)
  @JoinTable()
  genres!: Genres[];

  @OneToMany(() => BookRank, (bookRank) => bookRank.book)
  bookRanks!: BookRank[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
