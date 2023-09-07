//const { expect } = require("chai");
var expect = chai.expect;

let originalDeck = new CreateDeck();

describe('CreateDeck()', function() {
    describe('check for type array', function () {
        it('should return object type array', function() {
            let deck = new CreateDeck();
            expect(deck).to.be.a('array');
        })
    describe('verify that the deck is shuffled', function() {
        it('should not be in the same order as the original deck', function() {
            let deck = new CreateDeck();
            expect(deck).to.not.equal(originalDeck);
        })
    })
    })
    // NOTE - showing how these work
    describe('verify deck contains cards with proper properties', function() {
        it('should contain the property "suit"', function() {
            let deck = new CreateDeck();
            expect(deck[0]).to.have.property('suit');
        })
        it('suit should be one of four strings', function() {
            let deck = new CreateDeck();
            expect(deck[0].suit).to.be.oneOf(['Hearts', 'Diamonds', 'Spades', 'Clubs']);
        })
        it('should contain the property "rank"', function() {
            let deck = new CreateDeck();
            expect(deck[0]).to.have.property('rank');
        })
        it('should contain the property "value"', function() {
            let deck = new CreateDeck();
            expect(deck[0]).to.have.property('value');
        })
        
    })

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

