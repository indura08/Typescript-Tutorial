//example 1 

const score : Array<number> = []
const name1: Array<string> = []


function identityOne(val:boolean | number):boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

//me uda function dketm return type ssaha argument walal data type deddi eka eka seema watenwa, identity1 ta denna puluwan boolean or number withri 

//nmauth me pahala krmaeta functon eka define krama generics use krla , ethkot sahenna deyk krgnna puluwan
function identityThree<Type>(val: Type): Type {
    return val
}

//example 2 generic functions define krnna puluwan thawa widiyak
function identityFour<T>(val: T): T{
    return val
}

interface Bottle {
    brand:string,
    type:number
}

//identityFour<Bottle> //me wage bottle type ekn gfuntion ekk use krnwa nm ehamth puluwn ithin

//----------------------------------------------------------------------------------------------------------------

//example 3 = function ekkt T generic data type ekn arry ekk dena widiya
function getSearchProduct<T>(products: T[]):T {
    //do some database operation
    const myIndex = 3
    return products[myIndex]
}

//example 4 = arrow function ekak generics walin 

const getMoresearchProducts = <T ,>(products: T[]):T => { //othan commawa daala thiynne additional widiyt ara ehma th puluwan kiyla kiynna
    //do some operations 
    const myIndex = 4
    return products[myIndex]
}

//--------------------------------------------------------------------------------------------------------------------------

//example 5 

function anotherFunction<T,U extends number>(val1:T, val2:U):object{
    return {
        val1,
        val2
    }
}

//anotherFunction(3, "4") //amothrfuncton eke u eka number wela thiyed mehma danna bha , methandi eka loku deyk widiyt penne nha ehma nm generic classes use nokr inna puluwan kiyla hithenwa namuth mehm krnna one wnea htna thiyna eka example 6 eke blnna

//example 6

interface Database {
    connection: string,
    username: string,
    password: string
}

function testfunction<T , U extends Database>(val1:T , val2:U):object{
    return {
        val1,
        val2
    }
}

console.log(testfunction(3, {connection:"123", username: "root" , password: "password"}))


//example 7 = generic classes

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: String
}
class Sellable<T>{
    public cart: T[] = [] //memeka theruma T datatype eken array ekk aran eka cart variable ekt save krnwa

    addToCart(product: T){
        this.cart.push(product) // meke theruma T data type ekn alue ekak gannwa , eka save krnwa cart variable ekt 
    }
}

const product =  new Sellable()
//meke poddk examle ekk ghla output check krgnna
