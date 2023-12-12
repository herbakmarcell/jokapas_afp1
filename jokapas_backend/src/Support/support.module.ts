import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './support.entity';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Ticket]),
    ],
    controllers: [SupportController],
    providers: [SupportService]
})
export class SupportModule {}
