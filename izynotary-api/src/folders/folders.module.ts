import { Module } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { FoldersController } from './folders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from './entities/folder.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seller } from 'src/sellers/entities/seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Folder, Customer, Seller])],
  controllers: [FoldersController],
  providers: [FoldersService],
})
export class FoldersModule {}
