
/* List of all constants for the Algorithm */

export class ScoreConstants {

    // ---------- Constants Ausgleiche  --------------   
    public static readonly Ausgleich_A50 = 15;
    public static readonly Ausgleich_A10 = 1.5;
    public static readonly Ausgleich_A0 = 2;
    public static readonly Ausgleich_NB50 = 15;
    public static readonly Ausgleich_NB10 = 0.8;
    public static readonly Ausgleich_FB50 = 15;
    public static readonly Ausgleich_FU50 = 15;
    public static readonly Ausgleich_FU10 = 1.5;
    public static readonly Ausgleich_FR50 = 15;
    public static readonly Ausgleich_FR10 = 1.5;
    public static readonly Ausgleich_EF50 = 15;
    public static readonly Ausgleich_EF10 = 1.5;
    public static readonly Ausgleich_FZ2000 = 0.5;


    // ---------- Constants punishments and rewards --------------   
    public static readonly punishment_A = 100;
    public static readonly punishment_FZ1 = 1000;
    public static readonly punishment_FZ2 = 400;
    public static readonly reward_FU = 100;
    public static readonly reward_FR = 100;
    public static readonly reward_EF = 100;

    // ---------- Constants CO2 values --------------
    public static readonly CO2_FU = 0;
    public static readonly CO2_FR = 0;
    public static readonly CO2_EF = 14;
    public static readonly CO2_EA = 96;
    public static readonly CO2_A = 143;
    public static readonly CO2_FZ = 214;
    public static readonly CO2_NB = 55;
    public static readonly CO2_FB = 29;


    // ---------- Constants alg CO2 values --------------
    public static readonly Abs_FU = (ScoreConstants.CO2_A - ScoreConstants.CO2_FU) / 100;
    public static readonly Abs_FR = (ScoreConstants.CO2_A - ScoreConstants.CO2_FR) / 100;
    public static readonly Abs_EF = (ScoreConstants.CO2_A - ScoreConstants.CO2_EF) / 100;
    public static readonly Abs_EA = (ScoreConstants.CO2_A - ScoreConstants.CO2_EA) / 100;
    public static readonly Abs_A = -ScoreConstants.CO2_A / 100;
    public static readonly Abs_FZ = -ScoreConstants.CO2_FZ / 100;
    public static readonly Abs_NB = (ScoreConstants.CO2_A - ScoreConstants.CO2_NB) / 100;
    public static readonly Abs_FB = (ScoreConstants.CO2_A - ScoreConstants.CO2_FB) / 100;
}