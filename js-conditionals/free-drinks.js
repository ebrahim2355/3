const burgerPrice = 400;

if(burgerPrice >= 500){
    console.log("You get a free Coke")
}
else{
    console.log("You will have to buy the Coke for 30")
}

// in one line
message = burgerPrice >= 500 ? "you get a free Coke" : "You will have to buy the Coke for 30"
console.log(message);