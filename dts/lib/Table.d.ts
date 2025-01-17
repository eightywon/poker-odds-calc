import Player from "./Player";
import Deck from "./Deck";
import Game from "./Game";
import Board from "./Board";
import { Games as iGames, IHand } from "./Interfaces";
export default class Table {
    protected seats: number;
    protected players: Array<Player>;
    protected deck: Deck;
    protected game: Game;
    protected board: Board;
    private _exhaustive;
    private _limit;
    constructor(game?: iGames, seats?: number);
    exhaustive(): this;
    runExhaustive(): boolean;
    limit(limit: number): this;
    getLimit(): number;
    tripsBeatsStraight(): this;
    getPlayersInHand(): Player[];
    getDeck(): Deck;
    getGame(): Game;
    getBoard(): Board;
    boardAction(fn: Function): this;
    setPlayerHand(hand: IHand, seat: number): this;
    addPlayer(hand: IHand): this;
    calculate(): import("./Result").default;
    setBoard(cards: Array<string>): this;
    setDeadCards(cards: Array<string>): this;
}
