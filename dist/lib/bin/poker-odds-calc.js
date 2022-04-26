#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argv = require("argv");
const Table_1 = require("../Table");
const Utils_1 = require("../Utils");
argv.option([
    {
        name: "game",
        short: "g",
        type: "string",
        description: "Select between texas_holdem, shortdeck_holdem and omaha. Default texas_holdem."
    },
    {
        name: "board",
        short: "b",
        type: "string",
        description: "Define community cards. Example -b 5sTd9cTh."
    },
    {
        name: "player",
        short: "p",
        type: "list,string",
        description: "Define any number of player hand. Example -p AcKh."
    },
    {
        name: "exhaustive",
        short: "e",
        type: "boolean",
        description: "Run all possible board combinations, regardless limit option."
    },
    {
        name: "limit",
        short: "l",
        type: "int",
        description: "Limit number of iterations. Default 100,000."
    },
    {
        name: "dead",
        short: "d",
        type: "string",
        description: "Dead card(s) to exclude from calculation. Example 2s2d"
    },
    {
        name: "tripsbeatstraight",
        type: "boolean",
        description: "Option only available for -g shortdeck_holdem"
    }
]);
const { options } = argv.run();
const log = Utils_1.Log.PrintLn;
let PrintResult = (result) => {
    log();
    log(Utils_1.Log.color(`Board`, 'grey') + "   " + table.getBoard().getCards().map(c => Utils_1.Log.color(c.toString(), c.color())).join(" "));
    log();
    log(`Player        Hand         Wins      Ties`, 'grey');
    result.getPlayers().forEach(player => {
        log(`${Utils_1.Log.color(player.getName(), 'cyan')}     ${player.getPlayer().getCards().map(c => Utils_1.Log.color(c.toString(), c.color())).join(" ")}     ${Utils_1.Log.color(player.getWinsPercentageString().padStart(7, " "), player.isWinner() ? "green" : "white")}    ${Utils_1.Log.color(player.getTiesPercentageString().padStart(6, " "), "white")}`);
    });
    if (!result.isApproximate()) {
        const COL_WIDTH = 17;
        log();
        let players = result.getPlayers();
        let ranks = Object.keys(players[0].getRanks());
        log('                 ' + players.map((player, i) => {
            return `${player.getName()}`.padStart(COL_WIDTH, " ");
        }).join(""), 'cyan');
        ranks.forEach(rank => {
            let str = Utils_1.Log.color(players[0].getRanks()[rank].getName().padEnd(COL_WIDTH, " "), 'grey');
            players.forEach((player, i) => {
                if (player.getRanks()[rank].getCount() > 0)
                    str += Utils_1.Log.color((player.getRanks()[rank].getCount() + " (" + player.getRanks()[rank].getPercentage(true) + ")").padStart(COL_WIDTH, " "), player.getRanks()[rank].getCount() > 0 ? 'white' : 'grey');
                else
                    str += Utils_1.Log.color("_".padStart(COL_WIDTH, " "), 'grey');
            });
            log(str);
        });
    }
    log();
    log(`${result.getIterations()} iterations in ${result.getTime()}ms`, 'grey');
};
let table;
try {
    table = new Table_1.default(options.game);
    if (!Array.isArray(options.player))
        throw new Error("No players found! Use -p or --player. Example -p AcKh.");
    options.player.forEach((p) => {
        table.addPlayer((0, Utils_1.CardsFromString)(p));
    });
    if (options.hasOwnProperty("board"))
        table.setBoard((0, Utils_1.CardsFromString)(options.board));
    if (options.tripsbeatstraight)
        table.tripsBeatsStraight();
    if (options.hasOwnProperty("limit"))
        table.limit(options.limit);
    if (options.exhaustive === true)
        table.exhaustive();
    if (options.hasOwnProperty("dead"))
        table.setDeadCards((0, Utils_1.CardsFromString)(options.dead));
    PrintResult(table.calculate());
}
catch (e) {
    log(e.toString(), 'red');
}
