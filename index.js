const bgimgEl = document.getElementById("bg-img");

window.addEventListener("scroll", () => {
  // I had put the style codes here but i tring a another way
  updateImage();
});

function updateImage() {
  bgimgEl.style.opacity = 1 - window.pageYOffset / 900;
  bgimgEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
