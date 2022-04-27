import Card from "./Card";
import Table from "./Table";
import { IHand, Nullable } from "./Interfaces";
export default class Player {
    private seat;
    private Table;
    private hand;
    constructor(seat: number, Table: Table, hand?: Nullable<IHand>);
    setHand(hand: IHand): Card | this;
    getHand(): string | null;
    inHand(): boolean;
    getCards(): Nullable<Card[]>;
    isEmpty(): boolean;
    getSeat(): number;
}
