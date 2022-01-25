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

@Entity('author', { schema: 'book_ds' })
export class Author extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 50,
  })
  firstName: string;

  @Column('varchar', {
    nullable: true,
    length: 50,
  })
  lastName: string;
  @Column('varchar', {
    nullable: true,
    length: 100,
  })
  fullName: string;

  @Column('varchar', {
    nullable: true,
    length: 70,
  })
  companyName: string;

  @OneToMany(() => Book, (book) => book.author)
  books!: Book[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
