import { Injectable } from '@nestjs/common';
import { TestDto } from './dtos/create-test.dto';
import { TestRepositroy } from './repository/test.repository';

@Injectable()
export class AppService {
  constructor(private testRepository:TestRepositroy){}

  async createTest(createDto:TestDto){
    return this.testRepository.createTest(createDto);
  }
  async getTest() {
    return await this.testRepository.getAllTest();
  }
}
