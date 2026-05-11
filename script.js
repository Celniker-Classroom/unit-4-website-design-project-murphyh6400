function readFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function colorFunction() {
  var element = document.body;
  element.classList.toggle("orangemode");
}
function nextBrands() {
  window.location.href = "parks.html"
}
function nextParks() {
  window.location.href = "sponsors.html"
}