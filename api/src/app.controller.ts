import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getMissingNumber(@Query('numbers') numbers: string) {
    return this.appService.getMissingNumber(JSON.parse(numbers));
  }
}
