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

@Entity('role', { schema: 'book_ds' })
export class Role extends BaseE {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    nullable: true,
    length: 50,
  })
  name: string;

  @Column('varchar', {
    nullable: true,
    length: 150,
  })
  description: string;

  @OneToMany(() => User, (user) => user.role)
  users!: User[];

  @BeforeInsert()
  beforeInsert() {
    console.log('Success@!');
  }
}
