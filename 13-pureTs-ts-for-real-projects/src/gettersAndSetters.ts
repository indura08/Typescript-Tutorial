class User4 {

    private _courseCount = 1

    constructor(public email: string, public name: string , private userId : string ){

    }

    private deleteToken(){
        console.log("token deletetd!")
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    } //this is a getter

    get courseCount(): number {
        return this._courseCount
    }//me awilla private _coursecount variable ekt ghpu setter method ek

    set courseCount(courseNum) /*:void*/{
        if(courseNum<=1){
            throw new Error ("course count should be more than 1");
            
        }
        this._courseCount = courseNum
    }// setter ekkt typescript waldi kwadwath return type ekk thiynna bha. ara example eke thiynwa wgae void wath thgiyenna bha ithin mukuth bah kiwwama


}

const person2 = new User4("ind@gmail.com", "indura" , "112")
//person2.deleteToken() //delete token method eka use krnna bha eka private nisa