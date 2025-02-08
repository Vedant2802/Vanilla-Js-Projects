// const yourHeight = document.getElementById("#height");
// console.log(yourHeight);
// const yourWeight = document.getElementById("#weight");
// console.log(yourWeight);

// yourHeight.addEventListener("change", (e) => {
//   const heightValue = e.target.value;
//   console.log(heightValue);
// });

// const height = document.querySelector("#height");
// console.log(height);

// height.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightValue = parseInt(document.querySelector("#height").value);
  console.log(heightValue);
  const weightValue = parseInt(document.querySelector("#weight").value);
  console.log(weightValue);

  if (isNaN(heightValue) || isNaN(weightValue)) {
    alert("Please enter a valid numerical value");
    return;
  } else {
    const bmi = weightValue / ((heightValue * heightValue) / 10000).toFixed(2);
    alert(`Your bmi is ${bmi}`);
  }

  console.log("Valid height and weight entered:", heightValue, weightValue);
});

// Point to remeber
/*
    Form inputs return strings:
    document.querySelector("#weight").value always returns a string, even if the user enters a number.
*/
