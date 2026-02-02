const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

/* -------------------------------------------------- */
/* Helpers */
/* -------------------------------------------------- */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveNoButton() {
  // Force absolute positioning ONLY when moving
  btnNo.style.position = "absolute";

  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  const maxTop = containerRect.height - btnRect.height;
  const maxLeft = containerRect.width - btnRect.width;

  let newTop, newLeft;

  do {
    newTop = getRandomNumber(0, maxTop);
  } while (Math.abs(newTop - btnRect.top) < containerRect.height / 4);

  do {
    newLeft = getRandomNumber(0, maxLeft);
  } while (Math.abs(newLeft - btnRect.left) < containerRect.width / 4);

  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
}

/* -------------------------------------------------- */
/* Desktop: hover */
/* -------------------------------------------------- */
btnNo.addEventListener("mouseover", () => {
  if (window.innerWidth > 768) {
    moveNoButton();
  }
});

/* -------------------------------------------------- */
/* Mobile: touch / tap */
/* -------------------------------------------------- */
btnNo.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevents accidental click
  moveNoButton();
});

/* -------------------------------------------------- */
/* YES button */
/* -------------------------------------------------- */
btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
