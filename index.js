const cards = document.querySelectorAll(".carousel-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let positions = ["left", "center", "right"];

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("left", "center", "right");
    card.classList.add(positions[index]);
  });
}

nextBtn.addEventListener("click", () => {
  positions.push(positions.shift());
  updateCards();
});

prevBtn.addEventListener("click", () => {
  positions.unshift(positions.pop());
  updateCards();
});
