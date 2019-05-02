/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = createPhrases();
    this.activePhrase = null;
  }
  createPhrases() {
    return [
      "the sky is blue",
      "I want to go to school",
      "life is like a box of chocolates",
      "it is what it is"
    ];
  }
}
