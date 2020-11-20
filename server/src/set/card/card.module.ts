import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './card.service';
import { CardEntity } from './card.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity]),
  ],
  providers: [CardService],
  exports: [CardService],
})

export class CardModule {
}
