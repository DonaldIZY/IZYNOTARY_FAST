import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FolderHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: [ "Création", "Modification", "Modification d'une étape", "Suppression",] })
    actionType: string;

    @Column()
    madeBy: string;

    @CreateDateColumn()
    madeAt: Date;

    @Column()
    folderNumber: string;

    @Column({ type: "json", nullable:true })
    oldValue: any;

    @Column({ type: "json", nullable:true })
    newValue: any;

    constructor(folderHistory: Partial<FolderHistory>) {
        Object.assign(this, folderHistory);
    }
}
