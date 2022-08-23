import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TestDto } from "src/dtos/create-test.dto";
import { Test, TestDocument } from "src/schema/test.schema";


@Injectable()
export class TestRepositroy{
    constructor(@InjectModel(Test.name) private testModel:Model<TestDocument>){}

    async createTest(createTestDto:TestDto){
        return await new this.testModel({...createTestDto}).save();

    }
    async getAllTest(){
        return await this.testModel.find().exec();
    }
}    