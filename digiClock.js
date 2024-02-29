function displayTime() {
  let d = new Date();
  document.getElementById("displayClock").innerHTML = d;
}
let blink = setInterval(displayTime, 1000);

console.log(blink);
