import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnkaService } from './anka.service';
import { AnalyzPayload } from './dto/analyz-anka.dto';

@Controller('analyz')
export class AnkaController {
  constructor(private readonly ankaService: AnkaService) {}

  @Post()
  analyz(@Body() payload: AnalyzPayload) {
    if (payload.analyzType === 'offline') {
      return this.ankaService.analyzOfflineContent(payload);
    } else if (payload.analyzType === 'online') {
      return this.ankaService.analyzOnlineContent(payload);
    } else {
      return 'Invalid analyz type';
    }
  }

  // @Get()
  // findAll() {
  //   return this.ankaService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ankaService.findOne(+id);
  // }
}
