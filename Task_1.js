const changeIconBtn = document.getElementById("changeIconBtn");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

changeIconBtn.addEventListener("click", function () {
  if (icon1.style.display === "none") {
    icon1.style.display = "inline";
    icon2.style.display = "none";
  } else {
    icon1.style.display = "none";
    icon2.style.display = "inline";
  }
});
