"use strict";
class User5 {
    constructor(email, name) {
        /*private*/ this._courseCount = 1; //protected damma class eke thiyna attribute ekk use krhaki eke onema child class ekaka, private dammoth bha , protected kiynne private mai namuth thamnge  hild class wal use krnna puluwan
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
//eample 1 inheritance 
class Subuser extends User5 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chnageCourseCount() {
        this._courseCount = 4;
    }
}
