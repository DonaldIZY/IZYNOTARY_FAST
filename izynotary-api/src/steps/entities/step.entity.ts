import { Folder } from "src/folders/entities/folder.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Step {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "json" })
    steps: any[];

    constructor(step: Partial<Step>) {
        Object.assign(this, step);
    }
    
}
