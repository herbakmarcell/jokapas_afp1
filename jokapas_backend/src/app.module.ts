import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JwtModule} from "@nestjs/jwt";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'jokapas',
      entities: [User, Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: 'secret',
        signOptions: {expiresIn: '1d'}
    }),
    TypeOrmModule.forFeature([Product]),
    JwtModule.register({
        secret: 'secret',
        signOptions: {expiresIn: '1d'}
    })
  ],
  
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
