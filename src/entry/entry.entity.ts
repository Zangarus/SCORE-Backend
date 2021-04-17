import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';

export enum TravelType {
    FOOT,
    BIKE,
    CAR,
    TRAIN,
    PLANE
}

@Entity()
export class Entry {
    @PrimaryColumn()
    username?: string;

    @Column()
    distance: number;

    @Column()
    travelType: TravelType;

    @CreateDateColumn({
        precision: null,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    timestamp?: Date;
}
