import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";

export type TestDocument = Test & Document;

@Schema()
export class Test {
    @Prop({required:true})
    text:string;

}
export const TestSchema =SchemaFactory.createForClass(Test);
