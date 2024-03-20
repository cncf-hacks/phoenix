import { Module } from '@nestjs/common';
import { AnkaModule } from './anka/anka.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the module globally available across your app
    }),
    AnkaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
