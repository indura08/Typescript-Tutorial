//example 1
//array ek define krna syntax eka :
const superHeros: string[] = [];
const heroPower : number[] = [];

superHeros.push("indura")

//example 2
//array ekak define krna thwa widiyk
const girlsNames: Array<string> = []; //menna me wage Arraykey word eka use krla <> athule data type eka deelath array ekak define krgnna pulwaun


//example 3
type User = {
    name:string
    isActive: boolean
}

const allUsers: User[] = [] //menna me array eka User data type eka thiyna array ekk

allUsers.push({name: "indura" , isActive: true})//push krddi mewage object ekk push krnna one

//example 4
//2d arrays hdne mehemi

const MLmodels: number[][] = [
    [255,255,255],
    [125,123,165]
]
