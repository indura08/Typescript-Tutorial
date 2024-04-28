"use strict";
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    } //menna mehmi interface eka hriytm use krnne class ekak, apita aphu propertiess liynna wenwa 
}
class YouTube {
    constructor(cameraMode, filter, burstMode, short //me wage interface eke thiyna properties tika deela iwar wela one nm wadipura thwa properties denna puluwan eka awlk nha , namuth interface eke thiyna properties 3 i nm e 3 ma aniwaryenma dennama one eta aduwen denna bha
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
    createstory() {
        console.log("story was created!");
    }
}
