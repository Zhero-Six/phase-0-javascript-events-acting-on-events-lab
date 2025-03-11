// Your code here
// Grab the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Only move left if the dodger is not at the left edge (0px)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Only move right if the dodger's right edge is not at the right edge (400px)
  // The dodger is 40px wide, so its left position should not exceed 360px
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown events to move the dodger
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});