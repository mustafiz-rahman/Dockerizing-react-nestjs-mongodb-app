import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './dtos/create-test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create')
  createTest(@Body() createTestDto:TestDto){
    return this.appService.createTest(createTestDto);

  }


  @Get('/get')
  getTest(){
    return this.appService.getTest();
  }
}
