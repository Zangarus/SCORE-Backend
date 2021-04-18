import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Score {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int',{default: 0})
    absScore: number;

    @Column('int',{default: 0})
    relScore: number;

    @Column('int',{default: 0})
    emScore: number;

    @Column()
    beginDate?: Date;

    @Column()
    endDate?: Date;

    @Column('int',{default: 0})
    distanceCar: number;

    @Column('int',{default: 0})
    distanceFartrain: number;

    @Column('int',{default: 0})
    distanceNeartrain: number;

    @Column('int',{default: 0})
    distanceEcar: number;

    @Column('int',{default: 0})
    distanceFoot: number;

    @Column('int',{default: 0})
    distanceBike: number;

    @Column('int',{default: 0})
    distanceEbike: number;

    @Column('int',{default: 0})
    distancePlane: number;

    constructor() {
        this.beginDate = new Date();
        this.endDate = new Date();
    }
}