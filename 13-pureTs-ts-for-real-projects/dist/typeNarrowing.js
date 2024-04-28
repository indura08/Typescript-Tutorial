"use strict";
//example 1 (pc: type narrowing kiynne mokdd kiyla note ekk thiynwa eka balal enna meka blnna kalin) meka nikan detection wage scn ekk attatama kiwwoth
function detectTypes(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value + 3; //mekedi me kalla return wenna enne if statement eke condition eka flase unoth withri 
} //type narrowing walla documentation eke kiynneth mekmi , typeof daala check krla blala yanna kiyla loku loku projects waldi
function provideID(id) {
    if (!id) {
        console.log("please provid ID");
        return;
    }
    id.toLowerCase();
} //dan samnyen menna me wage null ekka wennath puluwan kiyla kalin define krla giyma lesi code eka madadi prshna enne nah
//example 2
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
} //methanadi str parameter ekat deela thiyna dataype hama ekkma check wela thiynwa code eka thule e hinda eka hoda code ekka , loku loku error enne nha me wage ghuwam
function isAdminAccount(acc) {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
} //methandi return kiirma sidda krnne acc eka Admin nam wihtir mokda Admin eke thiyna property ekak thami narrowing ekekdi check wenna., methan narowing kiynne if kea daala check krna ekat hode patalwa ganna epa 
//example 4 instanceof narrowing
//methandi instance of kiynne mokk hari class ekk ho intefcae ekk object ekk nm kiyna eki , em kiynne adla class ekak object ekk nm menna me d ekrnna kiynwa wage scn eka , eka kalin check krla bvlanwa wge scn ekk
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
} //methandi kiynne x kiyna eka Date class eke object ekk nm menna mehm deyk krnna kiynwa wgae scn ekk, ehma newie nm typescript automa detect krgnnwa eka string ekk kiyal
//methandi blnw input krla thiyna value eka fish knkda nadda kiyla
function isFish(pet) {
    return pet.swim !== undefined;
} //methandi attama kiynne pet wiidt deepu value eka fish eke object ekk widiyt argena blnna kiynwa , eta passe kynne ehma fish object ekk widiyt gattainpasse aaye blnna eket swim method ekk thiynwad kiyla , ehma nm meka maluwek nattnm mauwek newei, anthimt function eken return krnne true or false kiyla maluwekda nadda kiyna eki
function getFood(pet) {
    if (isFish(pet)) { //athanadi pet as fish kiyla return type ek dunnam isFish function ekt methndi hariytm aduragnnwa fish knkda ndda kiyla, nattnm type script confuse wnewa methdi mu fish knkda nadda kiylka
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
} //methandi kiynne kind poperty ekn check krla blnwa mokdda me shape eka kiyla , ewaye thiynwa wage data type ekk wage denna puluwan kind kiyna eka daala
function area(shape) {
    switch (shape.kind) {
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.length;
        case "circle":
            return Math.PI * shape.radius ** 2;
        default:
            const _defaultShape = shape;
            return _defaultShape; //menna me deafult code segmant eka danwa nmhodi mokd adeafult eka switch wage ekkt dannama onene , menna me  wage danwa nm hodiu
    }
}
