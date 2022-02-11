import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Task } from '../tasks/task.model';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  userId: string;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field()
  photoUrl?: string;

  @OneToMany(type => Task, task => task.userId)
  tasks: Task[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn()
  @Field()
  deleteAt: Date;
}
