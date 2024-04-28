"use strict";
//example 1 
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["WINDOW"] = 1] = "WINDOW";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice[SeatChoice["WAHALE"] = 3] = "WAHALE";
})(SeatChoice || (SeatChoice = {}));
var hs = SeatChoice.WINDOW;
//example eknma aduragnna mokdda wenne kiyna eka, 
//mewage enums denna giyma default agayak watenawa enum wala eka eka value ekt , e wage default wtenne 0 idla increment wewi example ekke widiyt gttoth meke aisle eke va;ue eka 0 , eka nathi krgnna apita onnm apalweni ekat dunnahaki agaya mokk hari apita denna one ekk, eta passe anik ewaye value ek ethna idla increment wewi ynwa
//example 2
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 10] = "AISLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 22] = "WINDOW";
    SeatChoice2[SeatChoice2["MIDDLE"] = 33] = "MIDDLE";
    SeatChoice2[SeatChoice2["WAHALE"] = 44] = "WAHALE"; //me wage apita one one agayan unath denna puluwan
})(SeatChoice2 || (SeatChoice2 = {}));
//example 3
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3["AISLE"] = "aisle";
    SeatChoice3["WINDOW"] = "window";
    SeatChoice3["MIDDLE"] = "middle";
    SeatChoice3["WAHALE"] = "wahale"; //me wage apita one one string agayan unath denna puluwan
})(SeatChoice3 || (SeatChoice3 = {}));
//example 4
var SeatChoice4;
(function (SeatChoice4) {
    SeatChoice4["AISLE"] = "aisle";
    SeatChoice4[SeatChoice4["WINDOW"] = 22] = "WINDOW";
    SeatChoice4[SeatChoice4["MIDDLE"] = 23] = "MIDDLE";
    SeatChoice4[SeatChoice4["WAHALE"] = 44] = "WAHALE"; //mehm dannath puluwan eta passe anka dann gattu thana idla pahalata yaddi eyt ankayk nattnm kalin eke increment eka gannwa ehmi yanne
})(SeatChoice4 || (SeatChoice4 = {}));
