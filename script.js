let i = 0;
const txt = "Välkommen hem."; /* The text */
var speed = 250; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  console.log("hej");
}
window.onload = function () {
  typeWriter();
};
