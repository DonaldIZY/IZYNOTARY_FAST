import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [PassportModule],
    providers: [UsersService, LocalStrategy],
    exports: [UsersService]
})
export class AuthModule {}
