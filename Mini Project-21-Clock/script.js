let interval;

function Clock() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

const start = () => {
  let interval = setInterval(Clock, 1000);
  console.log(interval);
};

// const stop = () => {
//   console.log(interval);
//   clearInterval(interval);
// };

// start();
