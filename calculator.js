
// Hard-coded variables
// let exerciseNo = 'No';
// let exerciseYes = 'Yes';
let genderMale = ['Male', 'm'];
let genderFemale = ['Female', 'f'];
// let exerciseDaily = process.argv[6];

// Condition to check if number is integer
const isInt = (n) => {
    return n % 1 === 0;
};

// Condition to check if number is float
const isFloat = (n) => {
    return n % 1 !== 0;
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
const timeInWeek = (current, ideal) => {
    let time = (current - ideal);
    let weeks = Math.round((time / 0.5));
    return weeks
}
//Calculate basal Metabolic Expenditure of user;
const BMR = (weight, height, age, gender) => {
    if (gender == genderMale[0] || gender == genderMale[1]) {
        let basal = (10 * weight) + (6.25 * (100 * height)) + (5 * age + 50);
        return Math.round(basal)
    } else {
        let basal = (10 * weight) + (6.25 * (100 * height)) + (5 * age - 150);
        return Math.round(basal)
    }
};

//Calculate BMR based on daily exercise
const exerciseBMR = (bmr, daily) => {
    if (daily == 'Yes') {
        return bmr * 1.6
    } else {
        return bmr * 1.4
    }
}
//Process in which category the user is with his BMI
const healthyBMI = (bmi) => {
    if (bmi > 25) {
        return 'You are overweight!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        return 'You have a healthy weight!'
    } else {
        return 'You are underweight!'
    }
};



/*
 End of Functions
*/

module.exports = {
    exerciseBMR,
    BMR,
    timeInWeek,
    idealWeight,
    bodyIndex,
    healthyBMI,
    isInt,
    isFloat
}