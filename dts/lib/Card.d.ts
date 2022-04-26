import Player from "./Player";
import Board from "./Board";
import Game from "./Game";
import { ICardNumber, ISuit } from "./Interfaces";
export default class Card {
    private suit;
    private num;
    private game;
    private owner;
    private rank;
    readonly str: string;
    constructor(suit: ISuit, num: ICardNumber, game: Game);
    toString(): string;
    color(): "white" | "red";
    inPlay(): boolean;
    setOwner(owner: Player | Board): this;
    isAce(): boolean;
    isLowAce(): boolean;
    setAsLowAce(): this;
    getRank(leading_zero?: boolean): any;
    getSuit(): ISuit;
    getNum(): ICardNumber;
}
