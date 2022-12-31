import { Injectable } from '@nestjs/common';
import { CreateCollectDto } from './dto/create-collect.dto';
import { UpdateCollectDto } from './dto/update-collect.dto';
import { Collect } from './entities/collect.entity';
import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CollectService {
  constructor(
    @InjectRepository(Collect)
    private readonly collectRepository: Repository<Collect>,
  ) {}

  async saveCollect(createCollectDto: CreateCollectDto) {
    var date = new Date();
    createCollectDto.dateTime = date;
    console.log(date);
    return this.collectRepository.save(createCollectDto);
  }

  async getAllCollection() {
    const result = await this.collectRepository.find({
      relations: {
        member: {},
      },
      where: {
        dateTime: Between(
          new Date('2022-09-20 11:49:24'),
          new Date('2022-10-16 14:15:34'),
        ),
        member: { id: 1 },
      },
    });

    return result;
  }

  findAll() {
    return `This action returns all collect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collect`;
  }

  update(id: number, updateCollectDto: UpdateCollectDto) {
    return `This action updates a #${id} collect`;
  }

  remove(id: number) {
    return `This action removes a #${id} collect`;
  }
}
