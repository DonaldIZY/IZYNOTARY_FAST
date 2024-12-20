import { Customer } from "src/customers/entities/customer.entity";
import { Step } from "src/steps/entities/step.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Folder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    folderNum: string;

    @Column({ enum: ["Vente", "Constitution de société", "Modification de société", "Succession de biens mobiliers", "Succession de biens immobiliers", "Crédit"] })
    procedureType: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ type: "json" })
    requiredFiles: any[];

    @Column()
    progression: number;

    @Column()
    status: string;

    @Column()
    comment: string;

    @ManyToOne(() => Customer, customer => customer.folders)
    customer: Customer;

    @OneToOne(() => Step, { cascade: true })
    @JoinColumn()
    step: Step;

    constructor(folder: Partial<Folder>) {
        Object.assign(this, folder);
    }

}
