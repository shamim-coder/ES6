let friendsAge = [18, 19, 33, 44, 21, 33]
let brothersAge = [33, 18, 32, 29, 25]
let studentsAge = [11, 15, 12, 18, 14]

let allAges = [...friendsAge, ...brothersAge, ...studentsAge];
console.log(allAges);

let maxAge = Math.max(...allAges)
console.log(`max age is: ${maxAge}`);
