let firstName = "Shamim"
    let lastName = "Reza"
const give10 = () => 10

const print10 = give10()
console.log(print10);

let dabbleIt = (a,b) => (a+b)*2


let name = dabbleIt(5,6)
console.log(name);


const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

let roll = rollDie()
console.log(roll);