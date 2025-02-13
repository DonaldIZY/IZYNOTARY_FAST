import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: [ "Création",  "Modification", "Suppression" ] })
    actionType: string;

    @Column()
    madeBy: string;

    @CreateDateColumn()
    madeAt: Date;

    @Column({ type: "json" })
    value: any;

    @Column({ type: "json", nullable: true })
    valueAfterEdit: any;

    constructor(customerHistory: Partial<CustomerHistory>) {
        Object.assign(this, customerHistory);
    }
}
