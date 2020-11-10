import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './card/card.entity';
import { SetEntity } from './set.entity';
import { SetService } from './set.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SetEntity, CardEntity]),
  ],
  providers: [SetService]
})
export class SetModule { }
