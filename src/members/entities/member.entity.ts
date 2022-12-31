import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collect } from 'src/collect/entities/collect.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false, type: 'varchar', length: 300 })
  lastName: string;

  @Column({ nullable: true })
  mobileNumber: string;

  @Column({ nullable: true })
  nic: string;

  @Column({ nullable: true })
  addressLine1: string;

  @Column({ nullable: true })
  addressLine2: string;

  @Column({ nullable: true })
  addressLine3: string;

  @OneToMany(() => Collect, (collect) => collect.member)
  @JoinColumn()
  collect: Collect;
}
