/* eslint-disable prettier/prettier */
import { Folder } from "src/folders/entities/folder.entity";
import { Identifier } from "src/identifier/entities/identifier.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @OneToOne(() => Identifier, identifier => identifier.user, { cascade: true })
    identifier: Identifier;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => Folder, folder => folder.assignedTo)
    folders: Folder[];

    @ManyToOne(() => Role, role => role.users, { onUpdate: "CASCADE" })
    role: Role;

    @Column({ type: "boolean", default: false })
    superUser: boolean;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }

}
