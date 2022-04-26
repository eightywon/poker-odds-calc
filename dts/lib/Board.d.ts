import Table from "./Table";
import Card from "./Card";
import Result from "./Result";
export default class Board {
    private table;
    private cards;
    private dead_cards;
    constructor(table: Table);
    private checkGameRules;
    setFlop(cards: Array<string>): this;
    dead(cards: string | Array<string>): this;
    getDeadCards(): Card[];
    setTurn(card: string): this;
    setRiver(card: string): this;
    private setCard;
    getGame(): import("./Game").default;
    getCards(): Card[];
    getResult(): Result;
}
