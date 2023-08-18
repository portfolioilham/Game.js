function Moving() {
  let benar = true;
  if (benar === true) {
    setTimeout(function () {
      let gerak = document.getElementById("area1");
      gerak.style.backgroundPosition =
        parseInt(gerak.style.backgroundPosition.replace("px", "")) - 10 + "px";
      Moving();

      let score = document.getElementById("SCORE");
      score.innerHTML = parseInt(score.innerHTML) + 1;
    }, 5);
  }
}
function Box() {
  let Boxslide = document.getElementById("Block");
  let Trex = document.getElementById("T-rex");
  // Boxslide.style.marginLeft =
  //   parseInt(Boxslide.style.marginLeft.replace("px", "")) - 5 + "px";
  setTimeout(function () {
    if (
      Trex.offsetTop + 50 >= Boxslide.offsetTop &&
      Trex.offsetLeft + 50 >= Boxslide.offsetLeft &&
      Trex.offsetTop + 50 <= Boxslide.offsetTop + 50 &&
      Trex.offsetLeft <= Boxslide.offsetLeft + 50
    ) {
      alert("Game Over" + document.getElementById("SCORE").innerHTML);
    }
    Box();
  }, 1);
}
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 32) {
    event.preventDefault();
    document.getElementById("T-rex").style.marginTop = "200px";
    document.getElementById("T-rex").classList.add("Beku");
    setTimeout(function () {
      document.getElementById("T-rex").style.marginTop = "300px";
      document.getElementById("T-rex").classList.remove("Beku");
    }, 1000);
  }
});
Box();
Moving();
