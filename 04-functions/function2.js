"use strict";
//return values sambnda tutorial eka
Object.defineProperty(exports, "__esModule", { value: true });
//function ekakin return krnna one value eke data type eke danne menna mehm, : function eke () walin passe : data type widiyti eka danne 
function addTwo(num) {
    return num + 10; //mekedi menna me wage number swithri return krnna pulwan
}
console.log(addTwo(30));
// function getValue(myVal: number){
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// } //me wage scnuth wenna puluwan, e kiynne eka eka situation waldi eka eka jathiye data types return krna function thiynnath puluwan
//arrow functions wal return type eka daana widiya
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is : ".concat(hero);
}); //me wage welwak hero arrow function argument ekt data type eka noda thiyna awsthwaka heros arry eke thiyna itesm walal data type eka anuwa typescript data type eka define krgnnwa
function consoleError(errmsg) {
    console.log(errmsg);
}
function errHandle(errmsg) {
    throw new Error(errmsg);
}
