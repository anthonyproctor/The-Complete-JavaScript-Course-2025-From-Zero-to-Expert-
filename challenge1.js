// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John?", markHigherBMI);

// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI (Test 2):", BMIMark);
console.log("John's BMI (Test 2):", BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John? (Test 2)", markHigherBMI);
