/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

const buttonReset = document.getElementById("btn__reset");
buttonReset.addEventListener("click", () => {
  game.startGame();
});

let keys = document.querySelectorAll(".key");
keys.forEach(element => {
  element.addEventListener("click", e => {
    game.handleInteraction(e.target);
  });
});
