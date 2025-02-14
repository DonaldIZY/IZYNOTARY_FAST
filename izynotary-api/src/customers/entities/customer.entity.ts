/* eslint-disable prettier/prettier */
import { Folder } from "src/folders/entities/folder.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column({ type: "enum", enum: ["Homme", "Femme"] })
    gender: string;

    @Column()
    birthDate: Date;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    identification: string;

    @Column()
    identificationNumber: string;

    @Column()
    imageOfIdentification: string;

    @Column()
    maritalStatus: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => Folder, folder => folder.customer, { onDelete: "CASCADE" })
    folders: Folder[];

    constructor(customer: Partial<Customer>) {
        Object.assign(this, customer);
    }

}
