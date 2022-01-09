// ! DOM Manipulation File

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    // Add html elements to loaded page - base
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // If only 1 card is selected
      if (memoryGame.pickedCards.length < 2) {
        // Add 1 to picked card array
        memoryGame.pickedCards.push(card);
      }

      // Add turned class when turned
      card.classList.add('turned');

      // If two cards selected, put array into two variables
      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];

        // Add 1 to pairs clicked count
        document.getElementById('pairs-clicked').innerHTML++;

        // If we found pairs
        if (memoryGame.checkIfPair(card1.innerHTML, card2.innerHTML)) {
          // Add 1 to pairs guessed
          document.getElementById('pairs-guessed').innerHTML++;

          // ! Add block status to card so they are not guessed again
          card1.classList.add('blocked');
          card2.classList.add('blocked');

          // ! Reset picked cards to be empty
          memoryGame.pickedCards = [];
        } else {
          // ! if cards are not pairs, remove turned class and reset array.
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
          }, 500); // Set time to flip rapidly the cards

          memoryGame.pickedCards = [];
        }
        // If the game ends, alert a win message
        if (memoryGame.checkIfFinished()) {
          alert('You won!');
        }
      }
      //console.log(`Card clicked: ${card}`);
    });
  });
});
