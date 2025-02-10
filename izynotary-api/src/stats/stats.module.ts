import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from 'src/folders/entities/folder.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Folder, Customer])],
  providers: [StatsService],
  controllers: [StatsController]
})
export class StatsModule {}
