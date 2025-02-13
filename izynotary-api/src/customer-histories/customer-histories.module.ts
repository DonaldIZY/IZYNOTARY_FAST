import { Module } from '@nestjs/common';
import { CustomerHistoriesService } from './customer-histories.service';
import { CustomerHistoriesController } from './customer-histories.controller';

@Module({
  controllers: [CustomerHistoriesController],
  providers: [CustomerHistoriesService],
})
export class CustomerHistoriesModule {}
