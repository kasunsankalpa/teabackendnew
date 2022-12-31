import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from './members/members.module';
import { CollectModule } from './collect/collect.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'tea',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    MembersModule,
    CollectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
