import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Score {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    absScore: number;

    @Column()
    relScore: number;

    @Column()
    emScore: number;

    @Column()
    beginDate?: Date;

    @Column()
    endDate?: Date;

    @Column()
    distanceCar: number;

    @Column()
    distanceFartrain: number;

    @Column()
    distanceNeartrain: number;

    @Column()
    distanceEcar: number;

    @Column()
    distanceFoot: number;

    @Column()
    distanceBike: number;

    @Column()
    distanceEbike: number;

    @Column()
    distancePlane: number;

    constructor() {
        this.absScore = 0;
        this.relScore = 0;
        this.emScore = 0;
        this.beginDate = new Date();
        this.endDate = new Date();
    }
}