/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Identifier } from 'src/identifier/entities/identifier.entity';
import { EmailService } from 'src/mail/email.service';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Identifier])],
  controllers: [CustomersController],
  providers: [CustomersService, EmailService],
})
export class CustomersModule { }
