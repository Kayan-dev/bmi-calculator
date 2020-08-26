const calculator = require('./calculator.js');

let isFloat = calculator.isFloat;
let isInt = calculator.isInt;
/*
 Validation of user input;
 All Functions
*/

// Hard-coded variables
let exerciseNo = 'No';
let exerciseYes = 'Yes';
let genderMale = ['Male', 'm'];
let genderFemale = ['Female', 'f'];

//Validate user name input
const validateUser = (name) => {
if(name == undefined || !isNaN(name)) {
     console.log('Please provide your name')
     process.exit();
}};


//Validate user weight input
const validateWeight = (weight) => {
if (weight == undefined || isNaN(weight)) {
     console.log('Please provide your weight')
     process.exit();
} else if (weight < 30 || weight > 300) {
     console.log('The provided weight will return inaccurate results. Please provide a weight between 30 and 300 kg')
    process.exit();
} else if (isFloat(weight)) {
    console.log(weight)
     console.log('Please provide your weight in kg without decimal')
    process.exit();
}};

//Validate user height input;
const validateHeight = (height) => {
if (height == undefined || isNaN(height)) {
     console.log('Please provide your height')
    process.exit();
    } else if (isInt(height)) {
         console.log('Please provide your height in meters, not centimeters')
    process.exit();
    }};

//Validate age input & age number
const validateAge = (age) => {
if (age === undefined || isNaN(age)) {
     console.log('Please provide your age with a number')
    process.exit();
} else if (age < 20) {
     console.log('This BMI calculator is designed for >20 years-old, any lower is inaccurate')
    process.exit();
}};

//Validate if user exercises daily
const validateExercise = (daily) => {
if (daily === undefined) {
     console.log('Do you exercise daily? Answer with Yes or No');
    process.exit();
} else if (daily !== exerciseNo &&  daily !== exerciseYes) {
     console.log('Please specify correctly if you exercise daily with Yes or No')
    process.exit();
}};

//Validate users' gender
const validateGender = (gender) => {
if (gender === undefined) {
     console.log('Please provide your gender (Male/Female) for calculating daily calorie need');
    process.exit();
// } else if ((gender !== genderMale[0] || gender !== genderMale[1]) && (gender !== genderFemale[0] || gender !== genderFemale[0])) {
//      console.log(gender);
//      console.log('Please specify your gender correctly with either Male/m or Female/f')
//     process.exit();
// }};

} else if (!genderMale.includes(gender) && !genderFemale.includes(gender)) {
     console.log(gender);
     console.log('Please specify your gender correctly with either Male/m or Female/f')
     process.exit();
}};


/*
 End of Functions
*/

module.exports = {
     validateGender,
     validateExercise,
     validateAge,
     validateHeight,
     validateWeight,
     validateUser,
}
 