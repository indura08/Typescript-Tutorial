//example 1 

enum SeatChoice {
    AISLE,
    WINDOW,
    MIDDLE,
    WAHALE
}

const hs = SeatChoice.WINDOW
//example eknma aduragnna mokdda wenne kiyna eka, 
//mewage enums denna giyma default agayak watenawa enum wala eka eka value ekt , e wage default wtenne 0 idla increment wewi example ekke widiyt gttoth meke aisle eke va;ue eka 0 , eka nathi krgnna apita onnm apalweni ekat dunnahaki agaya mokk hari apita denna one ekk, eta passe anik ewaye value ek ethna idla increment wewi ynwa

//example 2

enum SeatChoice2 {
    AISLE =10,
    WINDOW=22,
    MIDDLE=33,
    WAHALE=44 //me wage apita one one agayan unath denna puluwan
}

//example 3
enum SeatChoice3 {
    AISLE ="aisle",
    WINDOW="window",
    MIDDLE="middle",
    WAHALE="wahale" //me wage apita one one string agayan unath denna puluwan
}

//example 4

enum SeatChoice4 {
    AISLE ="aisle",
    WINDOW=22,
    MIDDLE,
    WAHALE=44 //mehm dannath puluwan eta passe anka dann gattu thana idla pahalata yaddi eyt ankayk nattnm kalin eke increment eka gannwa ehmi yanne


}

//example 5

const enum SeatChoice5 {
    AISLE =10,
    WINDOW=22,
    MIDDLE=33,
    WAHALE=44 //const dammama javascript walt convert weddi odak js codes generate wenne nha e hinda const daala enums nam krna eka hodi
}

export{}
