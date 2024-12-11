import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Identifier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hashedValue: string;

    @Column()
    baseHash: string;

    @Column()
    oldFirst: string;

    @Column()
    oldSecond: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @OneToOne(() => User, user => user.identifier)
    user: User;

    constructor(identifier: Partial<Identifier>) {
        Object.assign(this, identifier);
    }

}
