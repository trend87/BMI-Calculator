function bmiCalculator(weight, height){

    let bmiCalc = Math.floor(weight / (height * height))
    return bmiCalc

    
}

let yourWeight = prompt("Enter weight: ")
let yourHeight = prompt("Enter height: ")

let bmi = bmiCalculator (yourWeight, yourHeight)
document.getElementById("demo").innerText = "Your BMI is " + bmi + "kgm2"

// console.log(bmi)