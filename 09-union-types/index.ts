//examppe1

let score : number | string = 33 
//me widiyt thami eka variable ekkt data type goadk denne , ekiynne meka number ekk wennath puluwan , string ekk wennath puluwan

score = 44
score ="55" //me wage number ho string one value ekk denna puluwan me variable ekt

//example2
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let person : User | Admin  = {name: "indura", id: 3344} //meke theruma awilla User admin wennath puluwan User wennath puluwan 


//example 3

function getDbId(id: number|string){

    //id.toLowerCase() //mehm danna bha mokda typescript walin me id kiyna variable ek string saha number wana variable ekk widiyt salaknne thani ekk widiyt salkuwat methods apply krddi dwwidiytm bvlnwa so toLowecase method eka balapnne string walata withri , string number dektm balapanne nah

    if(typeof(id) === "string"){
        id.toLowerCase()
    }
}

//example 4
const data : (number | string)[] = [1,2,3,"indura"] //menna mehmi numbers saha strings use krnna puluwan arry ekk hdnne

//example 5
let pi:3.14 = 3.14 //menna me wage thiyeddi pi ekt denna puluwan agaya 3.14 withrmi , wena kisima agayak denna bah , meka nikan constant ekk kala wage scn ekk

let seatAllotment : "aisle" | "middle" | "window" //meke therumaa me variable ekt enna puluwan agayan 3 i e thunen ekak arunama wena agayan mukuthma enna bah koima welwakwath

//seatAllotment = "crew" //mehem dunnt wardi mokda ra agyan 3 ekk newiene

