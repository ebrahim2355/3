/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here
var perPerson = area / 2;
console.log(perPerson);


/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}
else if(money >= 10000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for(var day = 1; day <= lastDay; day++){
    if(day % 3 === 0){
        console.log(day + " " + "- medicine");
    }
    else{
        console.log(day + " " + "- rest");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
if(fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")){
    console.log("Store");
}
else{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse"  };
//write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var currentSalary = startingSalary;
for(var i = 1; i <= experience; i++){
    currentSalary += currentSalary * (5/100);
}
console.log(currentSalary.toFixed(2));