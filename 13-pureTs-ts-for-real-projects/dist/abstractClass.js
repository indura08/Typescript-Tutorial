"use strict";
//example 1 - defining a abstract class , abstract class walin objects hdnna bah
class TakePhotoabstract {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some calculation
        return 8;
    } //mukuth  othiya function hduwa wagema onenm functionality define krla methods hdnnath puluwan , oya scn eka thami abstract wali interface wali wenasa
}
//const person = new TakePhoto("test" , "Test") //mehm dammt wadak nha abstract class ekekin object hdnna bha
class Instagram1 extends TakePhotoabstract {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const person45 = new Instagram1("test", "Test", 3);
