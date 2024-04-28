interface TakePhoto {
    cameraMode: string
    filter: string
    burstMode: number

}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode : number 

    ){} //menna mehmi interface eka hriytm use krnne class ekak, apita aphu propertiess liynna wenwa 
}

interface Story {
    createstory(): void // mathk thignna java awala wage api interface wal nam krnwa withri 
}

class YouTube implements TakePhoto, Story{ //me wage one nm iterfaces  1 kata wade comma dada use krnna puluwan
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode : number, 
        public short : string //me wage interface eke thiyna properties tika deela iwar wela one nm wadipura thwa properties denna puluwan eka awlk nha , namuth interface eke thiyna properties 3 i nm e 3 ma aniwaryenma dennama one eta aduwen denna bha

    ){}

    createstory(): void {
        console.log("story was created!")
    }
}
