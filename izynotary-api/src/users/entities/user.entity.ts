import { Identifier } from "src/identifier/entities/identifier.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @OneToOne(() => Identifier, { cascade: true, onDelete: "CASCADE" })
    @JoinColumn()
    identifier: Identifier;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => Role, role => role.users, { onDelete: "CASCADE" })
    role: Role;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }
    
}
