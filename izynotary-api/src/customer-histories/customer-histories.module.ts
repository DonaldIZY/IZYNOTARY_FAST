import { Module } from '@nestjs/common';
import { CustomerHistoriesService } from './customer-histories.service';
import { CustomerHistoriesController } from './customer-histories.controller';
import { CustomerHistory } from './entities/customer-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [ TypeOrmModule.forFeature([CustomerHistory])],
  controllers: [CustomerHistoriesController],
  providers: [CustomerHistoriesService],
})
export class CustomerHistoriesModule {}
