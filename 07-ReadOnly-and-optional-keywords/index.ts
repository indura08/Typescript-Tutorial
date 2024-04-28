type User = {
    readonly _id: string //menna meke _id attribute eka api readonly krla thiynne e kiyne aphu eka edit krnna bah
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number //menna me widiyt property ekt issrhin ? lakuna dammama eka optional wenwa e kiynne ekt value ekk thibbath nathaht awlk nah

}


let myUser: User = {
    _id:"123",
    name: "indura",
    email: "indura@gmail.com",
    isActive: false
}

//myUser._id = "12345432"; //me widiyt apiuta aphu edit krnna bha error message ekk enwa readonly property ekak aphu edit krnna bha kiyla

//example 2
type  cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type creditcardDetails = cardNumber & cardDate & {
    cvv: number
}
//meke theruma awilla cardNumber type ekk hduwa, cardDate type ekk hduwa , eta passe cardDetails kiyla tytpe ekk hduwa ekat athulath wenwa cardDate kiyna type eki cardNUmber kiyna type eki saha twa aluthin hpu type ekk  ekk wechhca cvv attribute eka thiyna kalla
