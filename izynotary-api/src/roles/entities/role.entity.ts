import { Permission } from "src/permissions/entities/permission.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Permission, permission => permission.roles)
    permissions: Permission[];

    @OneToMany(() => User, user => user.role)
    users: User[];

    constructor(role: Partial<Role>) {
        Object.assign(this, role);
    }

}
