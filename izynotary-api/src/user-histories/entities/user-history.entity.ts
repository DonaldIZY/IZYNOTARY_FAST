import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: [ "Création", "Modification", "Suppression", "Mot de passe changé" ] })
    actionType: string;

    @Column()
    madeBy: string;

    @CreateDateColumn()
    madeAt: Date;

    @Column({ type: "json" })
    value: any;

    @Column({ type: "json", nullable: true })
    valueAfterEdit: any;

    constructor(userHistory: Partial<UserHistory>) {
        Object.assign(this, userHistory);
    }
}
