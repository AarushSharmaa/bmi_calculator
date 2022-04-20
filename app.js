const weight = document.querySelector("#inputWeight");
const height = document.querySelector("#inputHeight");
const button = document.querySelector("#btn");

const displayOutput = document.querySelector("#output");



button.addEventListener("click", function checkBMI() {

    //weight in kgs
    wt = Number(weight.value);

    // height in metres
    ht = (Number(height.value)) / 100;

    // bmi = (weight in kg) / ((height in metres) ^ 2)
    bmi = (wt) / (ht * ht);

    answer = Math.round(bmi);

    displayOutput.innerText = "The BMI is " + answer;
})