"use strict";
//example 1 how to create a class
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const person = new User("indura1@gmail.com", "indura");
//example 2 keyword like public and private 
class User1 {
    constructor(email, name) {
        this.city = "";
        this.province = ""; //private nathi onema ekk public thami e kiynne name , email okkoma public thami
        this.email = email;
        this.name = name;
        this.city = "kiribathgoda"; //namuth class eka thule eka acessible
    }
}
const person1 = new User1("upa@gmail.com", "upasith");
//person1.city //menna me wage apita bha private properies access krnna class ekn pita
//example 3 - proffessional wayto define classes
class User3 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
}
