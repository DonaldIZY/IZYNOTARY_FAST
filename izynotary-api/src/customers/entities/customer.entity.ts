import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    gender: string;

    @Column()
    birthDate: Date;

    @Column()
    phone: string;

    @Column()
    identification: string;

    @Column()
    identificationNumber: string;

    @Column()
    imageOfIdentification: string;

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    constructor(customer: Partial<Customer>) {
        Object.assign(this, customer);
    }
     
}
