//example 1 interface ekak define krna widiya

interface User {
    readonly dbid: number 
    email: string,
    userId: number,
    googleId?: string

    //methods in interfaces
    //startTrail: () => string //mehema method define krnnth puluwan
    
    startTrail() : string
    getCoupon(couponname: string, value:number):number
}

const indura : User = {dbid: 8, email:"indura3@gmail.com", userId: 1188, startTrail: () => {
    return "trail started"
},

getCoupon: (name : "indura" , off: 10) => { //interface ekk hinda argument walal nam samana wenna one nha mokkma hari string argumenrt ekkui number ekki watenna one
    return 10;
}, githubId:"8808"}

//me wage interface wall nam krna hama deykma interface ekn hdna object eke thiynna one, e kynne properties thiynna one , methods tika define wela thiynna ones


//example 2: interfaces and types
interface User {
    githubId: string
} //me wage hdpuma interface ekk aran reopen krla properties or method deela onnm hdgena yanna puluwan , methna hduwa unath hdna eka uda object ekat denna one

//example 3 : interface inheritance

interface Admin extends User {
    role: "admin" | "ta" | "learner"
} //admin interface eka User interface eka inherit krgnnwa 

//me example eke vblnna hama property ekkma method ekkma Use rta aithin methndi hdna admint awilla thiyna mokd admin inherit krnwa User wa , eta passe wadipura admin ge thiynna one role ekath define krla object eka hdla thiynne
const admin1 : Admin = {dbid: 8, email:"indura3@gmail.com", userId: 1188, startTrail: () => {
    return "trail started"
},

getCoupon: (name : "indura" , off: 10) => { 
    return 10;
}, githubId:"8808", role: "learner"}