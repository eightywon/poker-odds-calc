import Card from "./Card";
import Table from "./Table";
import {IHand, Nullable} from "./Interfaces";

export default class Player {

  private hand: Nullable<Array<Card>> = null;

  constructor(private seat: number, private Table: Table, hand: Nullable<IHand> = null) {
    if (Array.isArray(hand))
      this.setHand(hand);
  }

  setHand(hand: IHand) {
    const game = this.Table.getGame();
    /*spn
    if ((game.isTexasHoldem() || game.isSixPlusTexasHoldem()) && hand.length>=1)
      throw new Error("A Texas hold'em hand must contain exactly 2 cards!");
    */
    if (game.isOmaha() && hand.length !== 4)
      throw new Error("An Omaha hand must contain exactly 4 cards!");

    if (!this.hand) {
      this.hand = hand.map(c => {
        const card = this.Table.getDeck().getCards().find(card => card.toString() === c) as Card;
        if (!card)
          throw new Error(`Card "${c}" not found!`);
        return card.setOwner(this);
      });
    } else if (this.hand.length==1) {
      const card = this.Table.getDeck().getCards().find(card => card.toString() === hand[0]) as Card;
      if (!card)
        throw new Error(`Card "${hand}" not found!`);
      this.hand[1]=card
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
    return !this.inHand()
  }

  getSeat() {
    return this.seat;
  }

}
