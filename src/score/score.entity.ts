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

    constructor() {
        this.absScore = 0;
        this.relScore = 0;
        this.emScore = 0;
        this.beginDate = new Date();
        this.endDate = new Date();
    }
}