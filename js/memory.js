// ! Logic File

// Iteration 2.1: The MemoryGame class
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // Empty Array : Storing the cards
    this.pickedCards = [];
    // Counters
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  //Iteration 2.2: The class methods

  // Method to shuffle cards
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      // Shuffles random cards
      let j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  // Method to compare cards
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      // Adds 1 if clicked on both, 1 if guessed both
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      // Only adds 1 on clicked card
      this.pairsClicked += 1;
      return false;
    }
  }

  // Method to check if the game is finished
  checkIfFinished() {
    // /2 = counting based on pairs, pairs are all guessed
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
