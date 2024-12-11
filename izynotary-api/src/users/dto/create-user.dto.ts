import { CreateIdentifierDto } from "src/identifier/dto/create-identifier.dto";

export class CreateUserDto {
    lastName: string;
    firstName: string;
    gender: string;
    birthDate: Date;
    email: string;
    identifier: CreateIdentifierDto;
    roleId: number;
}
