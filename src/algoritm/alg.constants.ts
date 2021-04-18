
/* List of all constants for the Algorithm */

export class AlgorithmConstants {
        
    // ---------- Constants general --------------
        public static km;
        public static Mitfahrer;
        public static VM;
        public static AbsScore = 0;
        public static RelScore = 0;
        public static EmScore = 0;
    
        // ---------- Constants km for each VM --------------
        public static km_FU;
        public static km_FR;
        public static km_EF;
        public static km_EA;
        public static km_A;
        public static km_FZ;
        public static km_NB;
        public static km_FB;
    
        // ---------- Constants Ausgleiche  --------------   
        public static  Ausgleich_A50 = 15;
        public static  Ausgleich_A10 = 1.5;
        public static  Ausgleich_A0 = 2;      
        public static  Ausgleich_NB50 = 15;
        public static  Ausgleich_NB10 =0.8;  
        public static  Ausgleich_FB50 = 15;
        public static  Ausgleich_FU50 = 15;
        public static  Ausgleich_FU10 = 1.5;
        public static  Ausgleich_FR50 = 15;
        public static  Ausgleich_FR10 = 1.5;
        public static  Ausgleich_EF50 = 15;
        public static  Ausgleich_EF10 = 1.5;
        public static  Ausgleich_FZ2000 = 0.5;


        // ---------- Constants Bestrafungen und Belohnungen --------------   
        public static  Bestrafung_A = 100;
        public static  Bestrafung_FZ1 = 1000;
        public static  Bestrafung_FZ2 = 400;      
        public static  Belohnung_FU =100;
        public static  Belohnung_FR =100;   
        public static  Belohnung_EF =100;   
    
        // ---------- Constants Verkehrsmittel --------------
        public static readonly FU = 'Fuß';
        public static readonly FR = 'Fahrrad';
        public static readonly EF = 'EBike';
        public static readonly EA = 'EAuto';
        public static readonly A = 'Auto';
        public static readonly FZ = 'Flugzeug';
        public static readonly NB = 'Nahverkehr';
        public static readonly FB = 'Fernverkehr';
        
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
        public static readonly Abs_FU = (AlgorithmConstants.CO2_A-AlgorithmConstants.CO2_FU)/100;
        public static readonly Abs_FR = (AlgorithmConstants.CO2_A-AlgorithmConstants.CO2_FR)/100;
        public static readonly Abs_EF = (AlgorithmConstants.CO2_A-AlgorithmConstants.CO2_EF)/100;
        public static readonly Abs_EA = (AlgorithmConstants.CO2_A-AlgorithmConstants.CO2_EA)/100;
        public static readonly Abs_A = -AlgorithmConstants.CO2_A/100;
        public static readonly Abs_FZ = -AlgorithmConstants.CO2_FZ/100;
        public static readonly Abs_NB = (AlgorithmConstants.CO2_A-AlgorithmConstants.CO2_NB)/100;
        public static readonly Abs_FB = (AlgorithmConstants.CO2_A-AlgorithmConstants.CO2_FB)/100;
    }