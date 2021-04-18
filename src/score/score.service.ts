import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entry, TravelType } from "src/entry/entry.entity";
import { Repository } from "typeorm";
import { Score } from "./score.entity";
import { ScoreConstants as AC } from './score.constants';

@Injectable()
export class ScoreService {

    private calc: IScoreAlgorithm;

    constructor(
        @InjectRepository(Score)
        private scoreRepository: Repository<Score>,
    ) { 
        this.calc = new FirstScoreAlgorithm();
    }

    async updateScore(entry: Entry) {
        var score = await this.scoreRepository.findOne({
            where: { id: entry.user.score.id },
        })

        console.log(score);

        score = this.calc.proceed(entry, score);

        console.log(score);

        //upate score through algorithm
        // score.absScore = entry.distance;
        // score.emScore = entry.distance;
        // score.relScore = entry.distance;
        this.scoreRepository.save(score);
    }
}

export interface IScoreAlgorithm {
    proceed(data: Entry, oldScore: Score): Score;
}

export class FirstScoreAlgorithm implements IScoreAlgorithm {

    proceed(data: Entry, oldScore: Score): Score {
        if (data.travelType == TravelType.CAR) {                                      //Auto ausgewählt
            if (data.distance >= 50) {                                   //Auto über 50 km
                oldScore.absScore += (((AC.Abs_A * data.distance) - AC.Ausgleich_A50) / data.passenger);//Score wird verändert
                oldScore.distanceCar +=data.distance / data.passenger;                         //AC.km Zähler wird erhöht
            } else if (data.distance >= 10) {                            //Auto  10 bis 50km
                oldScore.absScore += (((AC.Abs_A * data.distance) * AC.Ausgleich_A10) / data.passenger);
                oldScore.distanceCar +=data.distance / data.passenger;
            } else {                                        //Auto bis 10 km
                oldScore.absScore += (((AC.Abs_A * data.distance) * AC.Ausgleich_A0) / data.passenger);
                oldScore.distanceCar +=data.distance / data.passenger;
                if (data.distance <= 3) {                               //punishment für kurze Strecke mit Auto
                    oldScore.absScore -= AC.punishment_A;
                }
            }
        } else if (data.travelType == TravelType.NEARTRAIN) {                              //Nahbahn ausgewählt
            if (data.distance >= 50) {                                   //Nahbahn über 50 km
                oldScore.absScore += ((AC.Abs_NB * data.distance) - AC.Ausgleich_NB50); //Score wird verändert
                oldScore.distanceNeartrain += data.distance;                                  //km Zähler wird erhöht
            } else if (data.distance >= 10) {                            //Nahbahn  10 bis 50km
                oldScore.absScore += ((AC.Abs_NB * data.distance) * AC.Ausgleich_NB10);
                oldScore.distanceNeartrain +=data.distance;
            } else {                                        //Nahbahn bis 10 km
                oldScore.absScore += ((AC.Abs_NB * data.distance));
                oldScore.distanceNeartrain +=data.distance;
            }
        } else if (data.travelType == TravelType.ECAR) {                              //EAuto ausgewählt
            if (data.distance >= 50) {                                   //EAuto über 50 km
                oldScore.absScore += ((AC.Abs_EA * data.distance) / data.passenger);    //Score wird verändert
                oldScore.distanceEcar +=data.distance / data.passenger;                        //km Zähler wird erhöht
            } else if (data.distance >= 10) {                            //EAuto  10 bis 50km
                oldScore.absScore += ((AC.Abs_EA * data.distance) / data.passenger);
                oldScore.distanceEcar +=data.distance / data.passenger;
            } else {                                        //EAuto bis 10 km
                oldScore.absScore += ((AC.Abs_EA * data.distance) / data.passenger);
                oldScore.distanceEcar +=data.distance / data.passenger;
            }
        } else if (data.travelType == TravelType.FARTRAIN) {                              //Fernbahn ausgewählt
            if (data.distance >= 50) {                                   //Fernbahn über 50 km
                oldScore.absScore += ((AC.Abs_FB * data.distance) - AC.Ausgleich_FB50);//Score wird verändert
                oldScore.distanceFartrain +=data.distance;                                  //km Zähler wird erhöht
            } else {                                        //Fernbahn bis 10 km
                oldScore.absScore += ((AC.Abs_FB * data.distance));
                oldScore.distanceFartrain +=data.distance;
            }
        } else if (data.travelType == TravelType.FOOT) {                              //Fuß ausgewählt
            if (data.distance >= 50) {                                   //Fuß über 50 km
                oldScore.absScore += ((AC.Abs_FU * data.distance) + AC.Ausgleich_FU50);              //Score wird verändert
                oldScore.distanceFoot +=data.distance;                                  //km Zähler wird erhöht
                oldScore.absScore += AC.reward_FU;                   //reward für lange Strecke zu Fuß
            } else if (data.distance >= 10) {                            //Fuß  10 bis 50km
                oldScore.absScore += ((AC.Abs_FU * data.distance) * AC.Ausgleich_FU10);
                oldScore.distanceFoot +=data.distance;
                oldScore.absScore += AC.reward_FU;
            } else {                                        //Fuß bis 10 km
                oldScore.absScore += ((AC.Abs_FU *data.distance));
                oldScore.distanceFoot +=data.distance;
                if (data.distance >= 3) {                               //reward für Strecke über 3 km zu Fuß
                    oldScore.absScore += AC.reward_FU;
                }
            }
        } else if (data.travelType == TravelType.BIKE) {                              //Fahrrad ausgewählt
            if (data.distance >= 50) {                                   //Fahrrad über 50 km
                oldScore.absScore += ((AC.Abs_FR * data.distance + AC.Ausgleich_FR50));//Score wird verändert
                oldScore.distanceBike +=data.distance;                                  //km Zähler wird erhöht
                oldScore.absScore += AC.reward_FR;                   //reward für lange Strecke Fahrrad
            } else if (data.distance >= 10) {                            //Fahrrad  10 bis 50km
                oldScore.absScore += ((AC.Abs_FR *data.distance) * AC.Ausgleich_FR10);
                oldScore.distanceBike +=data.distance;
                oldScore.absScore += AC.reward_FR;
            } else {                                        //Fahrrad bis 10 km
                oldScore.absScore += ((AC.Abs_FR *data.distance));
                oldScore.distanceBike +=data.distance;
            }
        } else if (data.travelType == TravelType.EBIKE) {                              //E-Bike ausgewählt
            if (data.distance >= 50) {                                   //E-Bike über 50 km
                oldScore.absScore += ((AC.Abs_EF *data.distance) + AC.Ausgleich_EF50);//Score wird verändert
                oldScore.absScore += AC.reward_EF;                   //reward für lange Strecke E-Bike
                oldScore.distanceEbike +=data.distance;                                  //km Zähler wird erhöht
            } else if (data.distance >= 10) {                            //E-Bike  10 bis 50km
                oldScore.absScore += ((AC.Abs_EF *data.distance) * AC.Ausgleich_EF10);
                oldScore.distanceEbike +=data.distance;
                oldScore.absScore += AC.reward_EF;                   //reward für lange Strecke E-Bike
            } else {                                        //E-Bike bis 10 km
                oldScore.absScore += ((AC.Abs_EF *data.distance));
                oldScore.distanceEbike +=data.distance;
            }
        } else if (data.travelType == TravelType.PLANE) {                                //Flugzeug ausgewählt
            if (data.distance >= 2000) {                                 //Flugzeug über 2000 km
                oldScore.absScore += (AC.Abs_FZ *data.distance) * AC.Ausgleich_FZ2000;                //Score wird verändert
                oldScore.distancePlane +=data.distance;                                  //km Zähler wird erhöht
            } else if (data.distance >= 750) {                           //Flugzeug  750 bis 2000km
                oldScore.absScore += AC.Abs_FZ *data.distance;
                oldScore.distancePlane +=data.distance;
            } else if (data.distance >= 300) {                           //Flugzeug  300 bis 750km
                oldScore.absScore += AC.Abs_FZ *data.distance;
                oldScore.distancePlane +=data.distance;
                oldScore.absScore -= AC.punishment_FZ2;                  //punishment für kurze Strecke mit Flugzeug
            } else {                                        //Flugzeug bis 300 km
                oldScore.absScore += AC.Abs_FZ *data.distance;
                oldScore.distancePlane +=data.distance;                                  //punishment für sehr kurze Strecke mit Flugzeug
                oldScore.absScore -= AC.punishment_FZ1;
            }
        }

        oldScore.absScore = Math.round(oldScore.absScore)

        return oldScore;
    }

}