const person = {
    name: "sodor uddin",
    age: 25,
    profession: "developer",
    salary: 25000,
    married: true,
    "fav places": ["bandarban", "saintmartin", "kuakata"]
}

// console.log(person)

// dot notation
// dot symbol diye object er property er value access kora
// console.log(person.profession)

const salary = person.salary;
// console.log(salary)

// bracket notation
// third bracket diye access kora
console.log(person["age"])
const boyos = person["age"]
console.log(boyos)

// error
// console.log(person."fav places")
console.log(person["fav places"])

const keyName = "profession";
console.log(person[keyName])