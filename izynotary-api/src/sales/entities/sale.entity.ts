import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    

    @Column()
    SUPPLY_OF_PARTS: boolean;

    @Column()
    WRITING_DEED_OF_SALE: boolean;
    
    @Column()
    SETTLEMENT_OF_FEES: boolean;
    
    @Column()
    SIGNATURE_DEED_OF_SALE: boolean;
    
    @Column()
    SIGNED_DOCUMENT_DEPOSITED: boolean;
    
    @Column()
    DELIVERABLES: boolean;
}
