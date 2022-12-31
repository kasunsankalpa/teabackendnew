import {
  Column,
  Double,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from 'src/members/entities/member.entity';

@Entity()
export class Collect {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  qty: Number;

  @Column({ nullable: false })
  dateTime: Date;

  @Column({ nullable: true })
  status: number;

  @ManyToOne(() => Member, (member) => member.collect)
  @JoinColumn()
  member: Member;
}
