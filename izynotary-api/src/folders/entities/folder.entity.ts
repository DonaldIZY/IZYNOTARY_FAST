import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Folder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    folderNum: string;

    @CreateDateColumn()
    createAt: Date;

    @Column()
    percentage: number;

    @Column()
    status: string;

    constructor(folder: Partial<Folder>) {
        Object.assign(this, folder);
    }

}
