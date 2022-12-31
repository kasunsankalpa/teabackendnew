import { Module } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CollectController } from './collect.controller';
import { Collect } from './entities/collect.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/members/entities/member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collect, Member])],
  controllers: [CollectController],
  providers: [CollectService],
})
export class CollectModule {}
