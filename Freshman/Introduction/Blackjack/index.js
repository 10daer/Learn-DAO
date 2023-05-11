// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
//Create a hasBlackJack varaiable to check of the player has a blackjack
//create an isalive variable to check if the player is still in the game
//Declare a variable called message and assign its value to an empty string
//solve the card problem by adding an array
// i would like to add no of rounds

let player = {
    name : "10daer",
    chips : 145
  }
  let cards = [];
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;
  let message = " ";
  
  let messageEl = document.getElementById("message-el");
  let sumEl = document.getElementById("sum-el");
  let cardsEl = document.getElementById("cards-el");
  let playerEl = document.getElementById("player-el");
  
  playerEl.textContent = player.name+ ": $"+player.chips;
  
  // Make this function return a random number between 1 and 13
  function randomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let random = Math.floor(Math.random() * 10) + 4;
    if (random === 1) {
      return 11;
    } else if (random === 11 || random === 12 || random === 13) {
      return 10;
    } else {
      return random;
    }
  }
  
  function playGame() {
    // Write the conditional according to these rules:
    // if less than or equal to 20 -> "Do you want to draw a new card?"
    // and save his blackjack
    // else if exactly 21 -> "Wohoo! You've got Blackjack!"
    // else -> "You're out of the game!"
    // Reassign the message variable to the string we're logging out
  
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "Woohoo! you have a blackjack"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: "+sum
    cardsEl.textContent = "Card: "+cards //firstCard+", "+secondCard;
    console.log("HAs a blackjack: " +hasBlackJack)
    console.log("He is alive: " +isAlive)
  }
  
  function startGame() {
    isAlive = true
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    playGame()
  }
  
  function newCard() {
    if (isAlive === true && hasBlackJack === false) {
      message = "Drawing a new card from the deck!";
      // 1. Create a card variable, and hard code its value to a number (2-11)
      // 2. Add the new card to the sum variable
      // 3. Call startGame()
      let card = randomCard();
      sum += card
      cards.push(card)
      playGame() 
      messageEl.textContent = message;
    } 
  }
  
  