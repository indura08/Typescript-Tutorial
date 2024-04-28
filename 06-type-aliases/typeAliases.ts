//mekedi wenne apita , apita one widiyt data types hdnna puluwan wage scn ekk example ekn therum gnna blnna

type User = {
    name:string,
    email: string,
    isActive: boolean
}

function createUser(user: User):User{
    return {name: "indura" , email: "indura@gmail.com" , isActive: true}
}
//dan menna me function eke arguments pass krddi user kiyla argument ekk pass krla thiynwa , ethkot e user kiyna argument eke data type eka awilla kalin hdpu User kiyna type ekai 
//elke hdot blnna mn hdla thiynne return type ekath User type eka wena widiyati


createUser({name: "indura" , email: "indura@gmail.com" , isActive: true})