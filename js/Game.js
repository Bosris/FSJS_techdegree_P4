/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    let phrases = [
      new Phrase("the sky is blue"),
      new Phrase("I want to go to school"),
      new Phrase("life is like a box of chocolates"),
      new Phrase("it is what it is"),
      new Phrase("life is what you make it")
    ];
    return phrases;
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.disabled = true;
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */

  checkForWin() {
    let hide = document.querySelectorAll(".hide");
    if (hide.length === 0) {
      return this.gameOver(true);
    } else {
      return false;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed++;
    let life = document.querySelectorAll("li img");
    life[this.missed - 1].outerHTML =
      '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    let gameMessage = document.querySelector("#game-over-message");
    overlay.style.display = "flex";
    if (gameWon) {
      overlay.classList.remove("start");
      overlay.classList.add("win");
      gameMessage.innerHTML = "You Win!";
    } else {
      overlay.classList.remove("start");
      overlay.classList.add("lose");
      gameMessage.innerHTML = "You Lose!";
    }
  }
}
