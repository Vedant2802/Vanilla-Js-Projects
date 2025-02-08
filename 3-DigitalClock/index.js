const clock = document.getElementById("clock");
// console.log(clock);

// let date = new Date();
// const updatedTime = date.toLocaleTimeString();

// clock.innerText = updatedTime;
// console.log(date.toLocaleTimeString());

setInterval(() => {
  let date = new Date();
  const updatedTime = date.toLocaleTimeString();

  clock.innerText = updatedTime;
}, 1000);
