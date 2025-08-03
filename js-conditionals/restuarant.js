const age = 62;
const price = 500;
if (age < 12){
    console.log("You can eat for free")
}
else if(age >= 60){
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 50){

}
else if(age >= 40){
    
}
else{
    console.log(price);
}