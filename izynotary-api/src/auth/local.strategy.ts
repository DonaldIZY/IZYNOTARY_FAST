import { Strategy } from 'passport-local';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";
import { Password } from 'src/utils/password.util';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super();
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user || !(await Password.validatePassword(password, user.identifier.baseHash))
    }
}