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
    //resets the keys and the phrase and hearts
    const removePhrases = document.querySelector("#phrase ul");
    this.missed = 0;
    if (removePhrases.hasChildNodes) {
      while (removePhrases.firstChild) {
        removePhrases.removeChild(removePhrases.firstChild);
      }
      let buttons = document.querySelectorAll(".key");
      buttons.forEach(element => {
        element.classList.remove("wrong");
        element.classList.remove("chosen");
        element.disabled = false;
      });
      let heartIMG = document.querySelectorAll(".tries");
      heartIMG.forEach(element => {
        element.innerHTML =
          '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>';
      });
    }
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    overlay.classList.remove("lose");
    overlay.classList.remove("win");
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    if (typeof button != "string") {
      button.disabled = true;
      if (this.activePhrase.phrase.includes(button.innerHTML)) {
        button.classList.add("chosen");
        let audio = new Audio("./audio/good.wav");
        audio.volume = 0.04;
        audio.play();
        this.activePhrase.showMatchedLetter(button.innerHTML);
        if (this.checkForWin()) {
          gameover(true);
        }
      } else {
        button.classList.add("wrong");
        this.removeLife();
        let audio = new Audio("./audio/wrong.wav");
        audio.volume = 0.04;
        audio.play();
      }
    } else {
      let keys = document.querySelectorAll(".key");
      keys.forEach(element => {
        if (element.innerHTML === button) {
          if (element.disabled === false) {
            element.disabled = true;
            if (this.activePhrase.phrase.includes(button)) {
              element.classList.add("chosen");
              let audio = new Audio("./audio/good.wav");
              audio.pause();
              audio.volume = 0.04;
              audio.play();
              this.activePhrase.showMatchedLetter(button);
              if (this.checkForWin()) {
                gameover(true);
              }
            } else {
              element.classList.add("wrong");
              this.removeLife();
              let audio = new Audio("./audio/wrong.wav");
              audio.pause();
              audio.volume = 0.04;
              audio.play();
            }
          }
        }
      });
    }
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
    console.log(this.missed);
    let life = document.querySelectorAll("li img");
    life[this.missed].outerHTML =
      '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
    this.missed++;
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
      let audio = new Audio("./audio/success.wav");
      audio.volume = 0.09;
      audio.play();
    } else {
      overlay.classList.remove("start");
      overlay.classList.add("lose");
      gameMessage.innerHTML = "You Lose!";
      let audio = new Audio("./audio/game over.wav");
      audio.volume = 0.2;
      audio.play();
    }
  }
}
