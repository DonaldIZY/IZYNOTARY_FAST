import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { EmailModule } from '../mail/email.module'; // 👈 Importation du module


@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), EmailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
