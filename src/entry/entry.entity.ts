import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

export enum TravelType {
    FOOT,
    BIKE,
    CAR,
    ECAR,
    EBIKE,
    FARTRAIN,
    NEARTRAIN,
    PLANE
}

@Entity()
export class Entry {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @ManyToOne(() => User, user => user.entries)
    user: User;

    @Column('int',{default: 0})
    distance: number;

    @Column()
    travelType: TravelType;

    @Column('int',{default: 1})
    passenger: number;

    //TODO add column mitfahrer with default 1

    @CreateDateColumn({
        precision: null,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    
    timestamp?: Date;
}
