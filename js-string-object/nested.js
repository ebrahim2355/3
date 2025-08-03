const college = {
    name: "vnc",
    class: ["10", "11", "12", "13"],
    events: ["science fair", "bijoy dibos", "21 Feb"],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: "top"
        }
    }
}


// console.log(college.name)
// console.log(college.unique)
// console.log(college.unique.color)

// console.log(college)
college.unique.result.merit = 'top top top top'
console.log(college.unique.result.merit)

college.events[1] = "16 December"
console.log(college.events[1])

delete college.class;
console.log(college)