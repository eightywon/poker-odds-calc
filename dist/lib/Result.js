"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const index_1 = require("./HandValue/index");
class ResultPlayer {
    constructor(data, table) {
        this.data = data;
        this.table = table;
    }
    isWinner() {
        return this.data.player.getSeat() === this.table.getWinner().player.getSeat() && this.getWinsPercentage() > 50;
    }
    getWins() {
        return this.data.wins;
    }
    getWinsPercentage() {
        return this.getWins() === 0 ? 0 : (0, Utils_1.toPercent)(this.getWins() / this.table.getIterations());
    }
    getWinsPercentageString() {
        return `${this.table.isApproximate() ? "~" : ""}${this.getWinsPercentage().toFixed(2)}%`;
    }
    getTies() {
        return this.data.ties;
    }
    getTiesPercentage() {
        return this.getTies() === 0 ? 0 : (0, Utils_1.toPercent)(this.getTies() / this.table.getIterations());
    }
    getTiesPercentageString() {
        return `${this.table.isApproximate() ? "~" : ""}${this.getTiesPercentage().toFixed(2)}%`;
    }
    getPlayer() {
        return this.data.player;
    }
    getRanks() {
        let ranks = {};
        for (let rank in this.data.ranks) {
            ranks[rank] = new ResultRank(rank, this);
        }
        return ranks;
    }
    getTable() {
        return this.table;
    }
    getRawRanks() {
        return this.data.ranks;
    }
    getName() {
        return `Player #${this.data.player.getSeat()}`;
    }
    getHand() {
        return this.getPlayer().getHand();
    }
}
class ResultRank {
    constructor(rank, player) {
        this.rank = rank;
        this.player = player;
    }
    getCount() {
        return this.player.getRawRanks()[this.rank];
    }
    getPercentage(as_string = false, _default = "0.00%") {
        const perc = this.getCount() === 0 ? _default : (0, Utils_1.toPercent)(this.getCount() / this.player.getTable().getIterations());
        if (as_string)
            return perc === _default ? perc : `${perc}%`;
        return perc;
    }
    getName() {
        return index_1.name[this.rank];
    }
}
class Result {
    constructor(result) {
        this.result = result;
    }
    getPlayers() {
        return this.result.players.map(data => new ResultPlayer(data, this));
    }
    isApproximate() {
        return this.result.approximate;
    }
    getIterations() {
        return this.result.iterations;
    }
    getTime() {
        return this.result.time;
    }
    getWinner() {
        return this.result.players.slice(0).sort((a, b) => b.wins - a.wins)[0];
    }
    getBoard() {
        return this.result.board.getCards().map(card => card.toString()).join("");
    }
    getDeadCards() {
        return this.result.board.getDeadCards().map(card => card.toString()).join("");
    }
    toJson() {
        return this.result;
    }
}
exports.default = Result;
