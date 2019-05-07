/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    [...this.phrase].forEach(function(element) {
      let li = document.createElement("li");
      li.innerHTML = element;
      if (element == " ") {
        li.classList.add("space");
      } else {
        li.classList.add("hide");
        li.classList.add("letter");
        li.classList.add(`${element}`);
      }
      ul.append(li);
    });
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return this.showMatchedLetter(letter);
    } else {
      return false;
    }
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  showMatchedLetter(letter) {
    let key = document.querySelectorAll(`.${letter}`);
    key.forEach(element => {
      element.classList.remove("hide");
      element.classList.add("show");
    });
  }
}
