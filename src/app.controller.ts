import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get() //@get리퀘스트를 할 수 있음 
  getHello(): string {
    return this.appService.getHello();
  }
}
