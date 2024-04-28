class User5 {

    /*private*/ protected _courseCount = 1 //protected damma class eke thiyna attribute ekk use krhaki eke onema child class ekaka, private dammoth bha , protected kiynne private mai namuth thamnge  hild class wal use krnna puluwan
    
    email: string;
    name : string;
    city: string = ""

    constructor(email: string, name: string ){
        this.email =  email;
        this.name  = name;
    }
}

//eample 1 inheritance 
class Subuser extends User5{
    isFamily: boolean = true
    chnageCourseCount(){
        this._courseCount = 4
    }
}