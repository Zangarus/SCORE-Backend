import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

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

    @ManyToOne(() => User, user => user.entries)
    user: User;

    @Column()
    distance: number;

    @Column()
    travelType: TravelType;

    //TODO add column mitfahrer with default 1

    @CreateDateColumn({
        precision: null,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    timestamp?: Date;
}
