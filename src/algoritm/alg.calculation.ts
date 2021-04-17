

/* Calculation of the Scores */

import { Entry } from "src/entry/entry.entity";

export interface IScoreData {
    readonly beginDate?: Date;
    readonly endDate?: Date;
    readonly absScore: number;
    readonly relScore: number;
    readonly emScore: number;
}


export interface IScoreAlgorithm {
    proceed(data: Entry[]): IScoreData;
}


export class FirstScoreAlgorithm implements IScoreAlgorithm {

    proceed(data: Entry[]): IScoreData {
        throw new Error("Method not implemented.");
    }
    
    /* nutzt private methods wo sinnvoll */


}