"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(seat, Table, hand = null) {
        this.seat = seat;
        this.Table = Table;
        this.hand = null;
        if (Array.isArray(hand))
            this.setHand(hand);
    }
    setHand(hand) {
        console.log("setHand, arg hand: ", hand, "this.hand: ", this.hand);
        const game = this.Table.getGame();
        /*spn
        if ((game.isTexasHoldem() || game.isSixPlusTexasHoldem()) && hand.length>=1)
          throw new Error("A Texas hold'em hand must contain exactly 2 cards!");
        */
        if (game.isOmaha() && hand.length !== 4)
            throw new Error("An Omaha hand must contain exactly 4 cards!");
        if (!this.hand) {
            this.hand = hand.map(c => {
                const card = this.Table.getDeck().getCards().find(card => card.toString() === c);
                if (!card)
                    throw new Error(`Card "${c}" not found!`);
                return card.setOwner(this);
            });
        }
        else if (this.hand.length == 1) {
            console.log("getting card for ", hand[0]);
            const card = this.Table.getDeck().getCards().find(card => card.toString() === hand[0]);
            console.log("card is  ", card);
            if (!card)
                throw new Error(`Card "${hand}" not found!`);
            this.hand[1] = card;
            return card.setOwner(this);
        }
        return this;
    }
    getHand() {
        if (this.hand === null)
            return null;
        return this.hand.map(card => card.toString()).join("");
    }
    inHand() {
        return this.hand !== null;
    }
    getCards() {
        return this.hand;
    }
    isEmpty() {
        return !this.inHand();
    }
    getSeat() {
        return this.seat;
    }
}
exports.default = Player;
