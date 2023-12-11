import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {JwtModule} from "@nestjs/jwt";
import { User } from "./User/user.entity";
import { Product } from './Product/product.entity';
import { ProductModule } from './Product/product.module';
import { UserModule } from './User/user.module';

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
    ProductModule,
    UserModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
