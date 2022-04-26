import Player from "./Player";
import Board from "./Board";
interface iPlayerResult {
    player: Player;
    wins: number;
    ties: number;
    ranks: {
        [key: string]: number;
    };
}
declare class ResultPlayer {
    private readonly data;
    private table;
    constructor(data: iPlayerResult, table: Result);
    isWinner(): boolean;
    getWins(): number;
    getWinsPercentage(): number;
    getWinsPercentageString(): string;
    getTies(): number;
    getTiesPercentage(): number;
    getTiesPercentageString(): string;
    getPlayer(): Player;
    getRanks(): {
        [key: string]: ResultRank;
    };
    getTable(): Result;
    getRawRanks(): {
        [key: string]: number;
    };
    getName(): string;
    getHand(): string | null;
}
declare class ResultRank {
    private readonly rank;
    private player;
    constructor(rank: string, player: ResultPlayer);
    getCount(): number;
    getPercentage(as_string?: boolean, _default?: string): number | string;
    getName(): string;
}
export default class Result {
    private readonly result;
    constructor(result: {
        players: Array<iPlayerResult>;
        board: Board;
        iterations: number;
        approximate: boolean;
        time: number;
    });
    getPlayers(): ResultPlayer[];
    isApproximate(): boolean;
    getIterations(): number;
    getTime(): number;
    getWinner(): iPlayerResult;
    getBoard(): string;
    getDeadCards(): string;
    toJson(): {
        players: iPlayerResult[];
        board: Board;
        iterations: number;
        approximate: boolean;
        time: number;
    };
}
export {};
