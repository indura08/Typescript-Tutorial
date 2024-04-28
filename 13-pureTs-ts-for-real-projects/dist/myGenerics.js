"use strict";
//example 1 
const score = [];
const name1 = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//me uda function dketm return type ssaha argument walal data type deddi eka eka seema watenwa, identity1 ta denna puluwan boolean or number withri 
//nmauth me pahala krmaeta functon eka define krama generics use krla , ethkot sahenna deyk krgnna puluwan
function identityThree(val) {
    return val;
}
//example 2 generic functions define krnna puluwan thawa widiyak
function identityFour(val) {
    return val;
}
//identityFour<Bottle> //me wage bottle type ekn gfuntion ekk use krnwa nm ehamth puluwn ithin
//----------------------------------------------------------------------------------------------------------------
//example 3 = function ekkt T generic data type ekn arry ekk dena widiya
function getSearchProduct(products) {
    //do some database operation
    const myIndex = 3;
    return products[myIndex];
}
//example 4 = arrow function ekak generics walin 
const getMoresearchProducts = (products) => {
    //do some operations 
    const myIndex = 4;
    return products[myIndex];
};
//--------------------------------------------------------------------------------------------------------------------------
//example 5 
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
function testfunction(val1, val2) {
    return {
        val1,
        val2
    };
}
console.log(testfunction(3, { connection: "123", username: "root", password: "password" }));
class Sellable {
    constructor() {
        this.cart = []; //memeka theruma T datatype eken array ekk aran eka cart variable ekt save krnwa
    }
    addToCart(product) {
        this.cart.push(product); // meke theruma T data type ekn alue ekak gannwa , eka save krnwa cart variable ekt 
    }
}
const product = new Sellable();
//meke poddk examle ekk ghla output check krgnna
