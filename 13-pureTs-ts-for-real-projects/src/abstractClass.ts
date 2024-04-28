//example 1 - defining a abstract class , abstract class walin objects hdnna bah
abstract class TakePhotoabstract {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void  //abstract walal wasiya awwilla interface walal wage onnm function eka nam krla mukuth nothiya innath puluwan
    getReelTime(): number{
        //some calculation
        return 8
    }//mukuth  othiya function hduwa wagema onenm functionality define krla methods hdnnath puluwan , oya scn eka thami abstract wali interface wali wenasa
}

//const person = new TakePhoto("test" , "Test") //mehm dammt wadak nha abstract class ekekin object hdnna bha

class Instagram1 extends TakePhotoabstract{ //namuth wena class ekkt extend krgenna puluwan dan instagram1 n object hduwahki
    constructor(
        public cameraMode: string,
        public  filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const person45 = new Instagram1("test" , "Test" ,  3)