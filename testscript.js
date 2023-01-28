//const { expect } = require("chai");
var expect = chai.expect;
describe('CreateDeck()', function() {
    describe('check for type array', function () {
        it('should return object type array', function() {
            let deck = new CreateDeck();
            expect(deck).to.be.a('array');
        })
    })
})
describe('CreateDeck()', function() {
    describe('verify deck size', function (){
        it("should be a length of 52", function() {
            let deck = new CreateDeck;
            expect(deck.length).to.equal(52);
        })
    })
})

describe('Player Decks', function () {
    describe('verify deck length for each player deck', function() {
        it("should be a length of 26 for player1Deck", function() {
            expect(player1Deck.length).to.equal(26);
        })
        it('should be a length of 26 for player2Deck', function() {
            expect(player2Deck.length).to.equal(26); 
        })
    })
})

