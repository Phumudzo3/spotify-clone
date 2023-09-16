const el = document.querySelector(".playlist-details-d1");

//const el = document.getElementsByClassName('playlist-details-d1');
const hiddenDiv = document.getElementById("hover-icon");

el.addEventListener("mouseover", () => {
  hiddenDiv.style.visibility = "visible";
});
el.addEventListener("mouseout", () => {
  hiddenDiv.style.visibility = "hidden";
});
