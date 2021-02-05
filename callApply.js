// object method property review
const myName = {
    salary: 30000,
    getSalary: function(tax, tip){
        return this.salary =  this.salary - tax - tip
    }
}

// myName.getSalary(800)
// console.log(myName.salary);

// object use bind to borrow method from another object

const friends1 = {
    fname: 'Abdur',
    lname: 'Rashid',
    salary: 25000
}
const friends2 = {
    fname: 'Ebrahim',
    lname: 'Sheikh',
    salary: 15000
}

// const friendSalary1 = myName.getSalary.bind(friends1)
// friendSalary1(1500)
// console.log(`Friends 01 Salary: ${friends1.salary}`);

// const friendSalary2 = myName.getSalary.bind(friends2)
// friendSalary2(1200)
// console.log(`Friends 02 Salary: ${friends2.salary}`);

// myName.getSalary(450)
// console.log(`My Salary: ${myName.salary}`);


// call

// myName.getSalary.call(friends1, 500)
// myName.getSalary.call(friends2, 650)
// console.log(friends1.salary);
// console.log(friends2.salary);


// Apply
myName.getSalary.apply(friends1,[600, 50])
console.log(friends1.salary);