import { CardModule } from './card/card.module';
import { LogModule } from 'src/log/log.module';
import { Module } from '@nestjs/common';
import { SetEntity } from './set.entity';
import { SetResolver } from './set.resolver';
import { SetService } from './set.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CardModule,
    LogModule,
    TypeOrmModule.forFeature([SetEntity]),
  ],
  providers: [SetService, SetResolver],
  exports: [SetService],
})

export class SetModule {
}
