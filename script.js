let weight = document.querySelector("#weight");
let height = document.querySelector("#Height");
let Age = document.querySelector("#Age");
let btn = document.querySelector("#btn");
let Category = document.querySelector("#Category");
let leanMass = document.querySelector("#leanMass");
let bodyFatWeight = document.querySelector("#bfW");
let bodyFatPercentage = document.querySelector("#bfP");
let gender = document.querySelector("#gender");
btn.addEventListener("click", function () {
    console.log("Weight", + weight.value);
    console.log("Height", + height.value);
    console.log("Age", + Age.value);
    console.log(gender.value);
    console.log("BMI", + weight.value / (height.value / 100 * height.value / 100));
    let bmi = weight.value / (height.value / 100 * height.value / 100);
    let category;
    if (bmi < 18.5) {
        Category.value = "UnderWeight";
        Category.value = "Category : UnderWeight";
        Category.style.color = "#3B82F6";
        console.log(Category.value);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        Category.value = "NormalWeight";
        Category.value = "Category : NormalWeight";
        Category.style.color = "#22C55E";
        console.log("Category", Category.value);
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        Category.value = "Overweight";
        Category.value = "Category : Overweight";
        Category.style.color = "#F59E0B";
        console.log("Category", Category.value);
    }
    else {
        Category.value = "Obesity";
        Category.value = "Category : Obesity";
        Category.style.color =  "#EF4444";
        console.log("Category", Category.value);
    }
    let estimatedFat;
    if (gender.value == "Male") {
        estimatedFat = (1.20 * bmi) + (0.23 * Age.value) - 16.2;
        bodyFatPercentage.value = estimatedFat.toFixed(2) + "%";
        bodyFatPercentage.value = "Estimated Body Fat : " + estimatedFat.toFixed(2) + "%";
        console.log(bodyFatPercentage.value);
        console.log(gender);
    }
    else {
        estimatedFat = (1.20 * bmi) + (0.23 * Age.value) - 5.4;
        bodyFatPercentage.value = estimatedFat.toFixed(2);
        bodyFatPercentage.value = "Estimated Body Fat : " + estimatedFat.toFixed(2) + "%";
        console.log("%", + bodyFatPercentage.value);
    }
    let BodyWeight;
    BodyWeight = (weight.value * estimatedFat) / 100;
    bodyFatWeight.value = BodyWeight.toFixed(2), " kg";
    bodyFatWeight.value = "BodyFat : " + BodyWeight.toFixed(2) + " kg";
    console.log(bodyFatWeight.value);
    let BodyleanMass;
    BodyleanMass = (weight.value - BodyWeight);
    leanMass.value = BodyleanMass.toFixed(2) + " kg";
    leanMass.value = "LeanMass : " + BodyleanMass.toFixed(2) + " kg";
    console.log(leanMass.value);
});

