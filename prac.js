console.log("hello");
document.getElementById("switch").addEventListener("click", change);
function change() {
  if (document.getElementById("switch").textContent.includes("ON")) {
    document.getElementById("light").src = "lightOn.jpg";
    document.getElementById("switch").textContent = "OFF";
    console.log("off");
  } else {
    document.getElementById("switch").textContent = "ON";
    document.getElementById("light").src = "lightOff.jpg";
    console.log("kkol");
  }
}
