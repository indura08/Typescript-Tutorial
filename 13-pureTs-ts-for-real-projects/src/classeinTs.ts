//example 1 how to create a class
class User {

    email: string;
    name : string;
    city: string = ""

    constructor(email: string, name: string ){
        this.email =  email;
        this.name  = name;
    }
}

const person = new User("indura1@gmail.com" , "indura")

//example 2 keyword like public and private 
class User1 {

    email: string;
    name : string;
    private city: string = ""
    public province: string = "" //private nathi onema ekk public thami e kiynne name , email okkoma public thami

    constructor(email: string, name: string ){
        this.email =  email;
        this.name  = name;
        this.city = "kiribathgoda" //namuth class eka thule eka acessible
    }
}

const person1 = new User1("upa@gmail.com" , "upasith")
//person1.city //menna me wage apita bha private properies access krnna class ekn pita

//example 3 - proffessional wayto define classes
class User3 {

    constructor(public email: string, public name: string , private userId : string ){

    }
}
