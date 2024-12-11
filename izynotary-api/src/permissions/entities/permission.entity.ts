import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Permission {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Role, role => role.permissions)
    roles: Role[];

    constructor(permission: Partial<Permission>) {
        Object.assign(this, permission);
    }

}
