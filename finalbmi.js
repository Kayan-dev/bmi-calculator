//Import functions
const validate = require('./validations.js');
const calculator = require('./calculator.js');
const fs = require('fs');


// Hard-coded variables
// let exerciseNo = 'No';
// let exerciseYes = 'Yes';
let genderMale = ['Male', 'm'];
let genderFemale = ['Female', 'f'];

/* 
Capture user input
*/
//Process user input 
let userName = process.argv[2];
let userAge = parseInt(process.argv[3]);
let userWeight = parseFloat(process.argv[4]);
let userHeight = parseFloat(process.argv[5]);
let exerciseDaily = process.argv[6];
let userGender = process.argv[7];

/* 
put imported functions into variables
*/
let validateUser = validate.validateUser;
let validateAge = validate.validateAge;
let validateWeight = validate.validateWeight;
let validateHeight = validate.validateHeight;
let validateGender = validate.validateGender;
let validateExercise = validate.validateExercise;

let BMR = calculator.BMR;
let bodyIndex = calculator.bodyIndex;
let exerciseBMR = calculator.exerciseBMR;
let idealWeight = calculator.idealWeight;
let timeInWeek = calculator.timeInWeek
let healthyBMI = calculator.healthyBMI;

console.log(validateGender(userGender), 'validation');

/*
Validate user input
*/
validateUser(userName);
validateAge(userAge);
validateWeight(userWeight);
validateHeight(userHeight);
validateExercise(exerciseDaily);

validateGender(userGender);

/*
Calculating BMI
*/

// Put return values into easier variable
let number = bodyIndex(userWeight, userHeight);
let ideal = idealWeight(userHeight);
let basal = BMR(userWeight, userHeight, userAge, userGender);
let bmrResult = exerciseBMR(basal, exerciseDaily);
let totalWeek = timeInWeek(userWeight, idealWeight(userHeight));
let calLost = basal - 500;

//Log the input of the user
console.log(
`Your name: ${userName}
Height in meters: ${userHeight}
Weight in kg: ${userWeight}
Your age: ${userAge}
Daily exercise: ${exerciseDaily}
Your gender: ${userGender}
`)

//Users' current BMI
console.log(`${userName}, your BMI is ${number}. ${healthyBMI(number)}`);
//Users' ideal weight
console.log('Your ideal weight is ', ideal);
//Basal Metabolic Rate of user including gender
if (userGender == genderMale[0] && userGender == genderMale[1])  {
    console.log(`Furthermore, your Basal Metabolic Rate (BMR) as a male is ${basal} kcal`);
} else if (userGender == genderFemale[0] || userGender == genderFemale[1]) {
    console.log(`Furthermore, your Basal Metabolic Rate (BMR) as a female is ${basal} kcal`);
};

//Basal M. R. of user based on daily exercise or not
console.log(`Your calculated BMR based on your exercise level is ${bmrResult} kcal per day
`)

//Advice how to reach ideal weight
// if (userWeight > ideal) {
//     let advice = `<p>In order to reach your ideal weight, with a BMI of 22.5,

// Restrict 500 kcal per day in order to lose 0.5kg of fat per week,

// This is equivalent to eating ${basal} - 500 = ${calLost} kcal per day,

// It will take ${totalWeek} weeks in total to reach your ideal weight</p>`;

//     fs.writeFile('diet-results.html', advice, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// } else {
//     console.log('You are underweight, go eat all the food you want!')
// }

if (userWeight > ideal) {
    console.log(`In order to reach your ideal weight, with a BMI of 22.5,

Restrict 500 kcal per day in order to lose 0.5kg of fat per week,

This is equivalent to eating ${basal} - 500 = ${calLost} kcal per day,

It will take ${totalWeek} weeks in total to reach your ideal weight`);
} else {
    console.log('You are underweight, go eat all the food you want!')
}

// fs.writeFile('diet-results.html', userOutput, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
/*
End of output
*/