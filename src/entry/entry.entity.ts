import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum TravelType {
    FOOT,
    BIKE,
    CAR,
    TRAIN,
    PLANE
}

@Entity()
export class Entry {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    distance: number;

    @Column()
    travelType: TravelType;

    @CreateDateColumn({
        precision: null,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    eintragsdatum?: Date;
}
