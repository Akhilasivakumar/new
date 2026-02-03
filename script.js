function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = weight / (height * height)hhj;

    document.getElementById("result").innerText =
        "Your BMI is: " + bmi.toFixed(2);
}
