import { Module } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { FoldersController } from './folders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from './entities/folder.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seller } from 'src/sellers/entities/seller.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Folder, Customer, Seller, User])],
  controllers: [FoldersController],
  providers: [FoldersService],
})
export class FoldersModule {}
