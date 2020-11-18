import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetEntity } from './set.entity';
import { SetResolver } from './set.resolver';
import { SetService } from './set.service';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    CardModule,
    TypeOrmModule.forFeature([SetEntity]),
  ],
  providers: [SetService, SetResolver],
  exports: [SetService],
})

export class SetModule {
}
