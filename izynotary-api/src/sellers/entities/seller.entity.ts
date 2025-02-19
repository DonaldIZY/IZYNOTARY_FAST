import { Folder } from "src/folders/entities/folder.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Seller {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    gender: string;

    @Column()
    maritalStatus: string;

    @Column()
    birthDate: Date;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    phone: string;

    @Column()
    identification: string;

    @Column({ unique: true })
    identificationNumber: string;

    @Column()
    imageOfIdentification: string;

    @Column({ nullable: true })
    comments: string

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => Folder, folder => folder.seller)
    folders: Folder[];
    
    constructor(seller: Partial<Seller>) {
        Object.assign(this, seller);
    }

}
