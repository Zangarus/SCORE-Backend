import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum TravelType {
    FOOT,
    BIKE,
    CAR,
    TRAIN,
    PLANE
}

export interface IEntry {
    distance: number;
    travelType: TravelType;
}

@Entity()
export class Entry {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    constructor(entry: IEntry) {
        if (entry) {
            this.distance = entry.distance;
            this.travelType = entry.travelType;
        }
    }
}
