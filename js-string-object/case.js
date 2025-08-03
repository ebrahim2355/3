const school = "RAJ UK Uttara Model College";

console.log(school)
console.log(school.toLowerCase());
console.log(school.toUpperCase())

//  uppercase: ABCD EFG
//  lowercase: abcd efg


const subject = "Chemistry";
const book = "ChemIsTry";

if(subject === book){
    console.log("I am reading a book, eibar exam a fatay felbo")
}
else{
    console.log("hudai hudai prista ultai dibo")
}


if(subject.toLowerCase === book.toLowerCase){
    console.log("I am reading a book, eibar exam a fatay felbo")
}
else{
    console.log("hudai hudai prista ultai dibo")
}


const drink = "water";
const liquid = "   water   ";

if(drink === liquid){
    console.log("pani er opor nam jibon");
}
else{
    console.log("somuddre pani ache khaite pari na");
}


if(drink.trim() === liquid.trim()){
    console.log("pani er opor nam jibon");
}
else{
    console.log("somuddre pani ache khaite pari na");
}