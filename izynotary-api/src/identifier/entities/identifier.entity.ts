import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Identifier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hashedValue: string;

    @Column({nullable: true})
    oldFirst: string;

    @Column({nullable: true})
    oldSecond: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    constructor(identifier: Partial<Identifier>) {
        Object.assign(this, identifier);
    }

}
