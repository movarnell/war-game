/* REVIEW    Author: Michael Varnell. michaelvarnell@icloud.com
Week 6 Coding Project "WAR!". Create a automated version of the classic card game WAR!. 
There are many versions but for ours it will only have two players. You do not need to do anything special when 
there is a tie in a round.
Deal 26 cards to each player from a deck of 52 cards.
Iterate through the turns where each player plays a card
The player who played the higher card is awarded a point - ties result in zero points for both players
After all cards have been played, display the score and declare the winner. 
Write a Unit Test using Mocha and Chai for at least one of the functions you write. 
*/ 


class CreateDeck {
    // this portion of the class creates the array of cards with the properties I wanted to use for the code. 
    constructor() {
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let deck =[];

        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < ranks.length; x++) {
                let card = {
                    suit: suits[i],
                    rank: ranks[x], 
                    // value is added as a property to simplify logic later it is simply index that doesn't
                    // change when deck is shuffled. 
                    value: x
                }
                deck.push(card);
            }
        }   
        deck.sort(() => Math.random() -0.5);
        return deck;
    }
}
// uses the class to create the shuffled deck
let deck = new CreateDeck;
let deck2 = new CreateDeck;
console.log(deck2);
// console logs out the created deck to verify that it is 52 items long, and that they are shuffled (this was not required
// but is handy for me in making sure the changes are validated and that Mocha and Chai are properly coded as well.)
console.log(deck);

// creates the players decks and console logs them out for verification as with the above deck creation.
let player1Deck = deck.slice(0, 26);
console.log(player1Deck);
let player2Deck = deck.slice(26, 52);
console.log(player2Deck);

// The below variables are for each players score calculation, and the last variable
// is used as way to edit each string based off the winner.
let player1Score = 0;
let player2Score = 0;
let handWinner = ""; 

// Now we are ready for WAR!
// using the following for loop we use our if, else if, and else logic to determine which card
// value is greater and who wins the hand. It then assigns the string based off this to the handWinner variable
// and will increment the scores.
for (i = 0; i < 26; i++){
 if(player1Deck[i].value > player2Deck[i].value) {
    player1Score += 1;
    handWinner = "Player 1";
 } else if(player1Deck[i].value < player2Deck[i].value) {
    handWinner = "Player 2";
    player2Score +=1;
 } else {
    handWinner = "TIE, NO POINTS AWARDED"; 
 }

 // now that the winner of this hand has been determined we need to print the results. 
 console.log(`
Round: ${i + 1}
 Player 1 plays: ${player1Deck[i].rank} of ${player1Deck[i].suit}
 Player 2 plays: ${player2Deck[i].rank} of ${player2Deck[i].suit}
 Winner is ${handWinner} 
 
 CURRENT SCORE STANDS AT:
 Player 1: ${player1Score} 
 Player 2: ${player2Score}
 `);
}
// so we have printed each hand throughout the game, we now need to show the winner based off the greater score. 
// the following if, else if, else statment to print the text based off these results.

    if (player1Score > player2Score) {
        handWinner = `Player 1 WINS with a score of ${player1Score}`
    } else if (player2Score > player1Score) {
        handWinner = `Player 2 WINS with a score of ${player2Score}`
    } else {
        handWinner = `TIE GAME, Player 1 score was ${player1Score} and Player 2 score was ${player2Score} 
        Therefore no clear winner could be determined in this war of attrition. Longer battle must occur in order to
        determine who has the clear superiority. Please refresh the page for further battle.`
    }

console.log(handWinner);
// STUB This is the end


