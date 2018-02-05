var box = document.getElementById("box");
var data = document.getElementById("data");

function reportMouseClick(e) {
  var xPosition = event.clientX - box.getBoundingClientRect().left;
  var yPosition = event.clientY - box.getBoundingClientRect().top;

  percLeft = Math.round(xPosition / box.offsetWidth * 100);
  percTop = Math.round(yPosition / box.offsetHeight * 100);

  var dot = document.querySelector(".dot");
  dot.style.left = percLeft + "%";
  dot.style.top = percTop + "%";

  data.innerHTML = "left:" + percLeft + "%; top:" + percTop + "%;";
}

box.addEventListener("click", reportMouseClick);