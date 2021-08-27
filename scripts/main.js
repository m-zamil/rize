//Toggle favourite button
const favouriteButtons = document.querySelectorAll(".add-to-favourite-btn");

for (const favBtn of favouriteButtons) {
  favBtn.addEventListener("click", function () {
    favBtn.classList.toggle("favourite");
  });
}

function toggleFavourite() {
  element.classList.toggle("favourite");
}
