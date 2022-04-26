"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Deck_1 = require("./Deck");
const Game_1 = require("./Game");
const Board_1 = require("./Board");
class Table {
    constructor(game = "texas_holdem", seats = 9) {
        this.seats = seats;
        this.players = [];
        this._exhaustive = false;
        this._limit = 100000;
        this.players = new Array(seats).fill(null).map((p, i) => new Player_1.default(i + 1, this));
        this.game = new Game_1.default(game, this);
        this.deck = new Deck_1.default(this.game);
        this.board = new Board_1.default(this);
    }
    exhaustive() {
        this._exhaustive = true;
        return this;
    }
    runExhaustive() {
        return this._exhaustive;
    }
    limit(limit) {
        this._limit = limit;
        return this;
    }
    getLimit() {
        return this._limit;
    }
    tripsBeatsStraight() {
        this.game.tripsBeatsStraight();
        return this;
    }
    getPlayersInHand() {
        return this.players.filter(player => player.inHand());
    }
    getDeck() {
        return this.deck;
    }
    getGame() {
        return this.game;
    }
    getBoard() {
        return this.board;
    }
    boardAction(fn) {
        fn(this.board);
        return this;
    }
    setPlayerHand(hand, seat) {
        if (this.players.length < seat)
            throw new Error("Seat not available!");
        if (seat < 1 || seat > this.seats)
            throw new Error(`Seat ${seat} not available!`);
        if (!this.players[seat - 1].isEmpty())
            throw new Error(`Seat ${seat} taken!`);
        this.players[seat - 1].setHand(hand);
        return this;
    }
    addPlayer(hand) {
        let seat = this.players.findIndex(s => s.isEmpty()) + 1;
        return this.setPlayerHand(hand, seat);
    }
    calculate() {
        if (this.players.filter(player => player.inHand()).length < 2)
            throw new Error("Minimum 2 players required");
        return this.board.getResult();
    }
    setBoard(cards) {
        this.board.setFlop(cards.slice(0, 3));
        if (cards.length > 3)
            this.board.setTurn(cards[3]);
        if (cards.length === 5)
            this.board.setRiver(cards[4]);
        return this;
    }
    setDeadCards(cards) {
        this.board.dead(cards);
        return this;
    }
}
exports.default = Table;
