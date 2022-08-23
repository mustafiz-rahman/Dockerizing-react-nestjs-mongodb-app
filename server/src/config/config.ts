import { MongooseModuleOptions } from "@nestjs/mongoose"


export const Config ={
    type:'mongodb',
    url:'mongodb://mus:secret@mongodb:27017/test?authSource=admin',
    useNewUrlParser:true,
    useUnifiedTopology:true,
    ssl:true,
    synchronize:true,
    entities:["dist/**/*.entity{ .ts,.js}"]

}