
/* 
Capture user input
*/
//Process user input 
let userName = process.argv[2];
let userWeight = parseFloat(process.argv[3]);
let userHeight = parseFloat(process.argv[4]);
let userAge = parseInt(process.argv[5]);
let exerciseDaily = process.argv[6];
let userGender = process.argv[7];

// Hard-coded variables
let exerciseNo = 'No';
let exerciseYes = 'Yes';
let genderMale = 'Male';
let genderFemale = 'Female';

/*
 Validation of user input;
 All Functions
*/
//Validate user name input
if(userName == undefined || !isNaN(userName)){
return console.log('Please provide your name')
};
// Condition to check if number is integer
function isInt(n) {
    return n % 1 === 0;
};
// Condition to check if number is float
function isFloat(n) {
    return n % 1 !== 0;
};
//Validate user weight input
if(userWeight == undefined || isNaN(userWeight)) {
    return console.log('Please provide your weight')
} else if(userWeight < 30 || userWeight > 300) {
    return console.log('The provided weight will return inaccurate results. Please provide a weight between 30 and 300 kg')
} 
if (isFloat(userWeight)) {
    console.log(userWeight)
    return console.log('Please provide your weight in kg without decimal')
};
//Validate user height input;
if (userHeight == undefined || isNaN(userHeight)) {
    return console.log('Please provide your height')
};
if(isInt(userHeight)){
    return console.log('Please provide your height in meters, not centimeters')
};
//Validate age input & age number
if (userAge == undefined || isNaN(userAge)) {
    return console.log('Please provide your age with a number')
} else if(userAge < 20) {
    return console.log('This BMI calculator is designed for >20 years-old, any lower is inaccurate')
};
//Validate if user exercises daily
if(exerciseDaily === undefined) {
    return console.log('Do you exercise daily? Answer with Yes or No');
} else if(exerciseDaily !== exerciseNo && exerciseDaily !== exerciseYes) {
    return console.log('Please specify correctly if you exercise daily with Yes or No')
}
//Validate users' gender
if (userGender === undefined) {
    return console.log('Please provide your gender (Male/Female) for calculating daily calorie need');
} else if(userGender !== genderMale && userGender !== genderFemale) {
    return console.log('Please specify your gender correctly with either Male or Female')
};
// calculate the BMI with function()
const bodyIndex = (weight, height) => {
    let bmiCalc = weight / (height * height);
    return bmiCalc.toFixed(2);
    //Or use Math.round(bmiCalc) to round off result
}
//Calculate ideal body weight for user
const idealWeight = (height) => {
    let ideal = 22.5 * (height * height);
    return ideal;
}
//Calculate how long this will take to reach ideal weight;
let timeInWeek = (current, ideal) => {
    let time = (current - ideal);
    let weeks = Math.round((time / 0.5));
    return weeks
}
//Calculate basal Metabolic Expenditure of user;
let BMR = (weight, height, age) => {
    if (userGender == genderMale) {
        let basal = (10 * weight) + (6.25 * (100 * height)) + (5 * age + 50);
        return Math.round(basal)
    } else {
        let basal = (10 * weight) + (6.25 * (100 * height)) + (5 * age - 150);
        return Math.round(basal)
    }
};
//Calculate BMR based on daily exercise
let exerciseBMR = (bmr, daily) => {
    if (daily == 'Yes') {
        return bmr * 1.6
    } else {
        return bmr * 1.4
    }
}
//Process in which category the user is with his BMI
let healthyBMI = (bmi) => {
    if (bmi > 25) {
        return 'You are overweight!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        return 'You have a healthy weight!'
    } else {
        return 'You are underweight!'
    }
}
/*
 End of Functions
*/

/*
Capture the output of functions in variables
*/
let number = bodyIndex(userWeight, userHeight);
let ideal = idealWeight(userHeight);
let totalWeek = timeInWeek(userWeight, ideal);
let basal = BMR(userWeight, userHeight, userAge);
//How much kcal must the user consume per day to lose 500kcal of fat per day
let calLost = basal - 500;
/*
End of variables
*/

/* 
The output of the BMI calculator
*/

//Log the input of the user
console.log(`Your name: ${userName}
Height in meters: ${userHeight}
Weight in kg: ${userWeight}
Your age: ${userAge}`
);

//Users' current BMI
console.log(`${userName}, your BMI is ${number}. ${healthyBMI(number)}`);
//Users' ideal weight
console.log('Your ideal weight is ', ideal);
//Basal Metabolic Rate of user including gender
if(userGender == genderMale) {
    console.log(`Furthermore, your Basal Metabolic Rate (BMR) as a male is ${basal} kcal`);
} else if(userGender == genderFemale) {
    console.log(`Furthermore, your Basal Metabolic Rate (BMR) as a female is ${basal} kcal`);
};

//Basal M. R. of user based on daily exercise or not
console.log(`Your calculated BMR based on your exercise level is ${exerciseBMR(basal)} kcal per day
`)

//Advice how to reach ideal weight
if(userWeight > ideal){  
console.log(
`In order to reach your ideal weight, with a BMI of 22.5,

Restrict 500 kcal per day in order to lose 0.5kg of fat per week,

This is equivalent to eating ${basal} - 500 = ${calLost} kcal per day,

It will take ${totalWeek} weeks in total to reach your ideal weight`);
} else {
    console.log('You are underweight, go eat all the food you want!')
}

/* 
End of output 
*/