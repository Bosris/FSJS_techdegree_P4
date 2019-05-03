/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
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
}
