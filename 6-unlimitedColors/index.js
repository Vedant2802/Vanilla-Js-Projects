// const colors = ["blue", "black", "yellow", "grey", "cyan"];

function changeColor() {
  const colors = ["blue", "black", "yellow", "grey", "cyan"];
  return colors[Math.floor(Math.random() * colors.length)];
}
// const value = changeColor();
// console.log(value);
let startId = document.getElementById("start");
let body = document.querySelector("body");
startId.addEventListener("click", function () {
  let intervalId = setInterval(function () {
    changeColor();
    const value = changeColor();

    body.style.background = `${value}`;
    // body.style.background = `${}`
  }, 1000);
  let stopId = document.getElementById("stop");
  stopId.addEventListener("click", () => {
    clearInterval(intervalId);
  });
});
