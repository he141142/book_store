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

@Entity('genres', { schema: 'book_ds' })
export class Genres extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 70,
  })
  name: string;

  @ManyToMany(() => Book)
  @JoinTable()
  public books!: Book[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
