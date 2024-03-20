import { Module } from '@nestjs/common';
import { AnkaService } from './anka.service';
import { AnkaController } from './anka.controller';

@Module({
  controllers: [AnkaController],
  providers: [AnkaService],
})
export class AnkaModule {}
