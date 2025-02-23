/* eslint-disable prettier/prettier */
import { Customer } from "src/customers/entities/customer.entity";
import { Seller } from "src/sellers/entities/seller.entity";
import { Step } from "src/steps/entities/step.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Folder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    folderNum: string;

    @Column({ type: "enum", enum: ["Vente", "Constitution de société", "Modification de société", "Succession de biens mobiliers", "Succession de biens immobiliers", "Crédit"] })
    procedureType: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ type: "date", nullable: true })
    endDate: Date;

    @Column({ type: "decimal", precision: 5, scale: 2 })
    progression: number;

    @Column({ type: "enum", enum: ["En cours", "Suspendu", "Arrêté", "Terminé"] })
    status: string;

    @Column({ nullable: true })
    comment: string;

    @Column({ type: "boolean", default: false })
    archived: boolean;

    @ManyToOne(() => User, assignedTo => assignedTo.folders)
    assignedTo: User;

    @ManyToOne(() => Customer, customer => customer.folders)
    customer: Customer;

    @OneToOne(() => Step, { cascade: true })
    @JoinColumn()
    step: Step;

    @ManyToOne(() => Seller, seller => seller.folders, { nullable: true })
    seller: Seller;

    constructor(folder: Partial<Folder>) {
        Object.assign(this, folder);
    }

}
