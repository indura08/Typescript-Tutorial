//return values sambnda tutorial eka

//function ekakin return krnna one value eke data type eke danne menna mehm, : function eke () walin passe : data type widiyti eka danne 

function addTwo(num:number):number{
    return num +10 ; //mekedi menna me wage number swithri return krnna pulwan
}

console.log(addTwo(30));

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// } //me wage scnuth wenna puluwan, e kiynne eka eka situation waldi eka eka jathiye data types return krna function thiynnath puluwan


//arrow functions wal return type eka daana widiya
const getHello = (s:string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero):string => {
    return `hero is : ${hero}`; 
}) //me wage welwak hero arrow function argument ekt data type eka noda thiyna awsthwaka heros arry eke thiyna itesm walal data type eka anuwa typescript data type eka define krgnnwa



function consoleError(errmsg:string):void{ //me wage void kiyla function eke return type ekat danwa kiynne me ffunction eken kisima welwak return wenne nha mukuth
    console.log(errmsg);
}

function errHandle(errmsg:string):never{ //meke function eke retur type ekat deela thiynne never kiyla , void wagema thami wachnaye arthyenma me function eken kisima daaaka (never) agayak ho mokakma ho retunr krnne nha      
    throw new Error(errmsg);
}





export{}