import Table from "./Table";
import Card from "./Card";
import Player from "./Player";
import { Games as iGames, Nullable } from "./Interfaces";
export default class Game {
    private game;
    private Table;
    private trips_beats_straight;
    constructor(game: iGames, Table: Table);
    isTexasHoldem(): boolean;
    isSixPlusTexasHoldem(): boolean;
    isOmaha(): boolean;
    getGame(): iGames;
    tripsBeatsStraight(): this;
    doesTripsBeatStraight(): boolean;
    getResult(players: Array<Player>, board: Array<Card>): {
        points: number;
        rank: {
            rank: string;
            str: string;
        };
        hand: Nullable<Card[]>;
        cards: Card[];
    }[];
    private getHandStrentgh;
}
