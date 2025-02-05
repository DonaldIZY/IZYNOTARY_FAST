import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { Folder } from 'src/folders/entities/folder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seller, Folder])],
  controllers: [SellersController],
  providers: [SellersService],
})
export class SellersModule {}
