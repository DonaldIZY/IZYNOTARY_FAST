import { Customer } from "src/customers/entities/customer.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    
    @OneToOne(() => User, user => user.identifier, { onDelete: "CASCADE", nullable: true })
    @JoinColumn()
    user: User;

    @OneToOne(() => Customer, customer => customer.identifier, { onDelete: "CASCADE", nullable: true })
    @JoinColumn()
    customer: Customer;

    constructor(identifier: Partial<Identifier>) {
        Object.assign(this, identifier);
    }

}
