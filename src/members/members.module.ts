import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { Member } from './entities/member.entity';
import { Collect } from 'src/collect/entities/collect.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Collect])],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
