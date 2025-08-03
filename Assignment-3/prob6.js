/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var currentSalary = startingSalary;
for(var i = 1; i <= experience; i++){
    currentSalary += currentSalary * (5/100);
}
console.log(currentSalary.toFixed(2));