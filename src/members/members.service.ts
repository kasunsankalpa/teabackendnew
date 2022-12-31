import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    private dataSource: DataSource,
  ) {}

  async saveMember(createMemberDto: CreateMemberDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const restlt = await queryRunner.manager.save(Member, createMemberDto);
    //  return restlt;

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    await this.dataSource.manager.save(Member)

    //return await this.memberRepository.save(createMemberDto);
  }

  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  async findAll() {
    return await this.memberRepository.find();
  }

  async findOne(nic: any) {
    return await this.memberRepository.findOne({ where: nic });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
