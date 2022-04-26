"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.type = exports.HighCards = exports.OnePair = exports.TwoPairs = exports.TreeOfAKind = exports.Straight = exports.Flush = exports.FullHouse = exports.Quads = exports.StraightFlush = void 0;
const StraightFlush_1 = require("./StraightFlush");
exports.StraightFlush = StraightFlush_1.default;
const Quads_1 = require("./Quads");
exports.Quads = Quads_1.default;
const FullHouse_1 = require("./FullHouse");
exports.FullHouse = FullHouse_1.default;
const Flush_1 = require("./Flush");
exports.Flush = Flush_1.default;
const Straight_1 = require("./Straight");
exports.Straight = Straight_1.default;
const TreeOfAKind_1 = require("./TreeOfAKind");
exports.TreeOfAKind = TreeOfAKind_1.default;
const TwoPairs_1 = require("./TwoPairs");
exports.TwoPairs = TwoPairs_1.default;
const OnePair_1 = require("./OnePair");
exports.OnePair = OnePair_1.default;
const HighCards_1 = require("./HighCards");
exports.HighCards = HighCards_1.default;
exports.type = {
    ROYAL_FLUSH: "ROYAL_FLUSH",
    STRAIGHT_FLUSH: "STRAIGHT_FLUSH",
    QUADS: "QUADS",
    FULL_HOUSE: "FULL_HOUSE",
    FLUSH: "FLUSH",
    STRAIGHT: "STRAIGHT",
    TREE_OF_A_KIND: "TREE_OF_A_KIND",
    TWO_PAIRS: "TWO_PAIRS",
    ONE_PAIR: "ONE_PAIR",
    HIGH_CARDS: "HIGH_CARDS",
};
exports.name = {
    ROYAL_FLUSH: "Royal Flush",
    STRAIGHT_FLUSH: "Straight Flush",
    QUADS: "4 of a kind",
    FULL_HOUSE: "Full House",
    FLUSH: "Flush",
    STRAIGHT: "Straight",
    TREE_OF_A_KIND: "3 of a kind",
    TWO_PAIRS: "Two Pairs",
    ONE_PAIR: "One Pair",
    HIGH_CARDS: "High Card",
};
