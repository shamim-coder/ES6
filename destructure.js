const person = {
    name    :   "Shamim Reza",
    age     :   22,
    mobile  :   '01718860139',
    nickname:   'Shobuj',
    address :   'Jhenaidah Sadar, Jhenaidah',
    birth   :   12/1/2020,
    friends :   ['Hamza', 'Prihas', 'Shakil', 'Korim', 'Mamun'],
    skills  :   {html: 'good', css: 'good', javascript: 'average'}
}

const {name, age, mobile, address, friends, salary=5000, skills} = person

// const {html, css, javascript} = person.skills
// const [hamza, ...more] = person.friends

// console.log(hamza, more);

// console.log('html: ', html, 'css: ', css, 'javascript: ', javascript);

console.log(`
Name    :   ${name}
Age     :   ${age}
Mobile  :   ${mobile}
Address :   ${address}
Friend  :   ${friends}
Salary  :   ${salary}
`);


const x = ['one', 'two', 'three']
const [green, yellow, red] = x

console.log(green, yellow, red);



const arr = [1,2,3];

[arr[2], arr[1]] = [arr[1], arr[2]];

console.log(...arr);



const friendName = ['salman khan', 'sahrukh khan', 'amir khan', 'shakib khan', 'hridoy khan']

const [firstFriend, secondFriend, ...bakiKhan ] = friendName

console.log(firstFriend, secondFriend, bakiKhan);