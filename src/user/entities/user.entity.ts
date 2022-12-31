import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Collect } from 'src/collect/entities/collect.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: false })
  userName: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  otherString: string;

  @Column({ nullable: true })
  otherInt: number;
}
