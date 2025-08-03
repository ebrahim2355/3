const person = {
    name: "sodor uddin",
    age: 25,
    profession: "developer",
    salary: 25000,
    married: true,
    "fav places": ["bandarban", "saintmartin", "kuakata"]
}

person.salary = 30000;
person["age"] = 26;
person["fav places"] = ["maldivs", "bali", "patya"]
console.log(person);

const propName = "profession"
person[propName] = "devops"
console.log(person)