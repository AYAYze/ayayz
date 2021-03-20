import { Module } from '@nestjs/common';
import { MainController } from './main/main.controller';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
