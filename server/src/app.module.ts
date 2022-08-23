import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config } from './config/config';
import { Test, TestSchema } from './schema/test.schema';
import { TestRepositroy } from './repository/test.repository';

@Module({
  imports: [
    MongooseModule.forRoot(Config.url),
    MongooseModule.forFeature([{name:Test.name,schema:TestSchema}])
  ],
  controllers: [AppController],
  providers: [AppService,TestRepositroy],
})
export class AppModule {}
