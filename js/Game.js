/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  //creates the phrases
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
  //grabs a random phrase
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
}
