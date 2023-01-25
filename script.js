/* Week 6 Coding Project "WAR!". Create a automated version of the classic card game WAR!. 
There are many versions but for ours it will only have two players. You do not need to do anything special when 
there is a tie in a round.
Deal 26 cards to each player from a deck of 52 cards.
Iterate through the turns where each player plays a card
The player who played the higher card is awarded a point - ties result in zero points for both players
After all cards have been played, display the score and declare the winner. 
Write a Unit Test using Mocha and Chai for at least one of the functions you write. 
*/ 

// Creating the deck
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
let deck = [];
for (i = 0; i < suits.length; i++) {
    for (x = 0; x < ranks.length; x++) {
        card = {
            suit: suits[i],
            rank: ranks[x],
            // value is added as a property to simplify logic later it is simply index that doesn't
            // change when deck is shuffled. 
            value: x
        }
        deck.push(card);
    ;
    }
}
// Shuffling the deck

function shuffle(deck){
    deck.sort(() => Math.random() -0.5);
}
shuffle(deck);
console.log(deck)

let player1Deck = deck.slice(0, 26);
console.log(player1Deck);
let player2Deck = deck.slice(26, 52);
console.log(player2Deck);

let player1Score = 0;
let player2Score = 0;
let handWinner = "";

// Now we are ready for WAR!

for (i = 0; i <= 26; i++){
 if(player1Deck[i].value > player2Deck[i].value) {
    player1Score += 1;
    handWinner = "Player 1";
 } else if(player1Deck[i].value < player2Deck[i].value) {
    handWinner = "Player 2";
    player2Score +=1;
 } else {
    handWinner = "TIE, NO POINTS AWARDED"; 
 }

 console.log(`
Round: ${i + 1}
 Player 1 plays: ${player1Deck[i].rank} of ${player1Deck[i].suit}
 Player 2 plays: ${player2Deck[i].rank} of ${player2Deck[i].suit}
 Winner is ${handWinner} 
 Player 1: ${player1Score} 
 Player 2: ${player2Score}
 `)
}



