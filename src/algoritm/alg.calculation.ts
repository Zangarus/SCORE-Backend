

/* Calculation of the Scores */

import { Entry } from "src/entry/entry.entity";
import {AlgorithmConstants as AC} from './alg.constants';

export interface IScoreData {
    readonly beginDate?: Date;
    readonly endDate?: Date;
    readonly AbsScore: number;
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
if (AC.VM == AC.A) {                                      //Auto ausgewählt
    if (AC.km>=50) {                                   //Auto über 50 km
        AC.AbsScore+=((((AC.Abs_A/100)*AC.km)-AC.Ausgleich_A50)/AC.Mitfahrer);//Score wird verändert
        AC.km_A+=AC.km/AC.Mitfahrer;                         //AC.km Zähler wird erhöht
    } else if (AC.km>=10) {                            //Auto  10 bis 50km
        AC.AbsScore+=((((AC.Abs_A/100)*AC.km)*AC.Ausgleich_A10)/AC.Mitfahrer);     
        AC.km_A+=AC.km/AC.Mitfahrer;                         
    } else {                                        //Auto bis 10 km
        AC.AbsScore+=((((AC.Abs_A/100)*AC.km)*AC.Ausgleich_A0)/AC.Mitfahrer);
        AC.km_A+=AC.km/AC.Mitfahrer;
        if (AC.km <= 3){                               //Bestrafung für kurze Strecke mit Auto
            AC.AbsScore -= AC.Bestrafung_A;
        }
  }
} else if (AC.VM == AC.NB) {                              //Nahbahn ausgewählt
    if (AC.km>=50) {                                   //Nahbahn über 50 km
        AC.AbsScore+=(((AC.Abs_NB/100)*AC.km)-AC.Ausgleich_NB50); //Score wird verändert
        AC.km_NB+=AC.km;                                  //km Zähler wird erhöht
    } else if (AC.km>=10) {                            //Nahbahn  10 bis 50km
        AC.AbsScore+=(((AC.Abs_NB/100)*AC.km)*AC.Ausgleich_NB10);
        AC.km_NB+=AC.km;
    } else {                                        //Nahbahn bis 10 km
        AC.AbsScore+=(((AC.Abs_NB/100)*AC.km));
        AC.km_NB+=AC.km;
  }
} else if (AC.VM == AC.EA) {                              //EAuto ausgewählt
    if (AC.km>=50) {                                   //EAuto über 50 km
        AC.AbsScore+=(((AC.Abs_EA/100)*AC.km)/AC.Mitfahrer);    //Score wird verändert
        AC.km_EA+=AC.km/AC.Mitfahrer;                        //km Zähler wird erhöht
    } else if (AC.km>=10) {                            //EAuto  10 bis 50km
        AC.AbsScore+=(((AC.Abs_EA/100)*AC.km)/AC.Mitfahrer);
        AC.km_EA+=AC.km/AC.Mitfahrer;
    } else {                                        //EAuto bis 10 km
        AC.AbsScore+=(((AC.Abs_EA/100)*AC.km)/AC.Mitfahrer);
        AC.km_EA+=AC.km/AC.Mitfahrer;
  }
} else if (AC.VM == AC.FB) {                              //Fernbahn ausgewählt
    if (AC.km>=50) {                                   //Fernbahn über 50 km
        AC.AbsScore+=(((AC.Abs_FB/100)*AC.km)-AC.Ausgleich_FB50);//Score wird verändert
        AC.km_FB+=AC.km;                                  //km Zähler wird erhöht
    } else {                                        //Fernbahn bis 10 km
        AC.AbsScore+=(((AC.Abs_FB/100)*AC.km));
        AC.km_FB+=AC.km;
  }
} else if (AC.VM == AC.FU) {                              //Fuß ausgewählt
    if (AC.km>=50) {                                   //Fuß über 50 km
        AC.AbsScore+=(((AC.Abs_FU/100)*AC.km)+AC.Ausgleich_FU50);              //Score wird verändert
        AC.km_FU+=AC.km;                                  //km Zähler wird erhöht
        AC.AbsScore += AC.Belohnung_FU;                   //Belohnung für lange Strecke zu Fuß
    } else if (AC.km>=10) {                            //Fuß  10 bis 50km
        AC.AbsScore+=(((AC.Abs_FU/100)*AC.km)*AC.Ausgleich_FU10);
        AC.km_FU+=AC.km;
        AC.AbsScore += AC.Belohnung_FU;
    } else {                                        //Fuß bis 10 km
        AC.AbsScore+=(((AC.Abs_FU/100)*AC.km));
        AC.km_FU+=AC.km;
        if (AC.km >= 3){                               //Belohnung für Strecke über 3 km zu Fuß
        AC.AbsScore += AC.Belohnung_FU;
      }   
    }    
} else if (AC.VM == AC.FR) {                              //Fahrrad ausgewählt
    if (AC.km>=50) {                                   //Fahrrad über 50 km
        AC.AbsScore+=(((AC.Abs_FR/100)*AC.km)+AC.Ausgleich_FR50);//Score wird verändert
        AC.km_FR+=AC.km;                                  //km Zähler wird erhöht
        AC.AbsScore += AC.Belohnung_FR;                   //Belohnung für lange Strecke Fahrrad
    } else if (AC.km>=10) {                            //Fahrrad  10 bis 50km
        AC.AbsScore+=(((AC.Abs_FR/100)*AC.km)*AC.Ausgleich_FR10);
        AC.km_FR+=AC.km;
        AC.AbsScore += AC.Belohnung_FR;
    } else {                                        //Fahrrad bis 10 km
        AC.AbsScore+=(((AC.Abs_FR/100)*AC.km));
        AC.km_FR+=AC.km;
        }       
} else if (AC.VM == AC.EF) {                              //E-Bike ausgewählt
    if (AC.km>=50) {                                   //E-Bike über 50 km
        AC.AbsScore+=(((AC.Abs_EF/100)*AC.km)+AC.Ausgleich_EF50);//Score wird verändert
        AC.AbsScore += AC.Belohnung_EF;                   //Belohnung für lange Strecke E-Bike
        AC.km_EF+=AC.km;                                  //km Zähler wird erhöht
    } else if (AC.km>=10) {                            //E-Bike  10 bis 50km
        AC.AbsScore+=(((AC.Abs_EF/100)*AC.km)*AC.Ausgleich_EF10);
        AC.km_EF+=AC.km;
        AC.AbsScore += AC.Belohnung_EF;                   //Belohnung für lange Strecke E-Bike
    } else {                                        //E-Bike bis 10 km
        AC.AbsScore+=(((AC.Abs_EF/100)*AC.km));
        AC.km_EF+=AC.km;
      }   
} else (AC.VM == AC.FZ) {                                 //Flugzeug ausgewählt
    if (AC.km>=2000) {                                 //Flugzeug über 2000 km
        AC.AbsScore+=(((AC.Abs_FZ/100)*AC.km)*AC.Ausgleich_FZ2000);                //Score wird verändert
        AC.km_FZ+=AC.km;                                  //km Zähler wird erhöht
    } else if (AC.km>=750) {                           //Flugzeug  750 bis 2000km
        AC.AbsScore+=((AC.Abs_FZ/100)*AC.km);     
        AC.km_FZ+=AC.km;                         
    } else if (AC.km>=300) {                           //Flugzeug  300 bis 750km
        AC.AbsScore+=((AC.Abs_FZ/100)*AC.km);     
        AC.km_FZ+=AC.km;         
        AC.AbsScore -= AC.Bestrafung_FZ2;                  //Bestrafung für kurze Strecke mit Flugzeug
    } else {                                        //Flugzeug bis 300 km
        AC.AbsScore+=((AC.Abs_FZ/100)*AC.km);
        AC.km_FZ+=AC.km;                                  //Bestrafung für sehr kurze Strecke mit Flugzeug
        AC.AbsScore -= AC.Bestrafung_FZ1;
        }
  }


  AC.AbsScore = Math.round(AC.AbsScore)