import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseE } from '../base';
import { Book } from './book';

@Entity('publisher', { schema: 'book_ds' })
export class Publisher extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 70,
  })
  name: string;

  @OneToMany(() => Book, (book) => book.publisher)
  public books!: Book[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
