"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("./Card");
const Interfaces_1 = require("./Interfaces");
class Deck {
    constructor(game) {
        this.game = game;
        this.cards = [];
        Interfaces_1.SuitsList.forEach((suit) => {
            let numbers = game.isSixPlusTexasHoldem() ? Interfaces_1.SixPlusDeck : Interfaces_1.FullDeck;
            numbers.forEach(num => {
                this.cards.push(new Card_1.default(suit, num, this.game));
            });
        });
    }
    getCards() {
        return this.cards;
    }
    getAvailableCards() {
        return this.cards.filter(card => !card.inPlay());
    }
}
exports.default = Deck;
