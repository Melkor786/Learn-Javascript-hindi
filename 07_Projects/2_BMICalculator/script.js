const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Valid Height ${height}`;
  }
  if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let feedback = "";
    if (bmi < 18.6) {
      feedback = "and You are Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      feedback = "and You are Perfectly Fit";
    } else {
      feedback = "and You are Over Weight";
    }

    results.innerHTML = `<span>The BMI value is ${bmi} ${feedback}</span>`;
  }
});
