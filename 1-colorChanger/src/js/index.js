const colorButtons = document.querySelectorAll(".button");
console.log(colorButtons);

const body = document.querySelector("body");

colorButtons.forEach((i) => {
  console.log(i);
  i.addEventListener("click", function (e) {
    console.log(e.target);
    const colorToChange = e.target.id;
    body.style.backgroundColor = colorToChange;
  });
});
