"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SixPlusDeck = exports.FullDeck = exports.CardNumbers = exports.SuitsList = exports.Suits = exports.AvailableGames = void 0;
exports.AvailableGames = ["texas_holdem", "sixplus_holdem", "omaha"];
var Suits;
(function (Suits) {
    Suits["HEARTS"] = "h";
    Suits["CLUBS"] = "c";
    Suits["DIAMONDS"] = "d";
    Suits["SPADES"] = "s";
})(Suits = exports.Suits || (exports.Suits = {}));
exports.SuitsList = [
    Suits.CLUBS,
    Suits.HEARTS,
    Suits.SPADES,
    Suits.DIAMONDS
];
var CardNumbers;
(function (CardNumbers) {
    CardNumbers[CardNumbers["TWO"] = 2] = "TWO";
    CardNumbers[CardNumbers["THREE"] = 3] = "THREE";
    CardNumbers[CardNumbers["FOUR"] = 4] = "FOUR";
    CardNumbers[CardNumbers["FIVE"] = 5] = "FIVE";
    CardNumbers[CardNumbers["SIX"] = 6] = "SIX";
    CardNumbers[CardNumbers["SEVEN"] = 7] = "SEVEN";
    CardNumbers[CardNumbers["EIGHT"] = 8] = "EIGHT";
    CardNumbers[CardNumbers["NINE"] = 9] = "NINE";
    CardNumbers["TEN"] = "T";
    CardNumbers["JACK"] = "J";
    CardNumbers["QUEEN"] = "Q";
    CardNumbers["KING"] = "K";
    CardNumbers["ACE"] = "A";
})(CardNumbers = exports.CardNumbers || (exports.CardNumbers = {}));
exports.FullDeck = [
    CardNumbers.TWO,
    CardNumbers.THREE,
    CardNumbers.FOUR,
    CardNumbers.FIVE,
    CardNumbers.SIX,
    CardNumbers.SEVEN,
    CardNumbers.EIGHT,
    CardNumbers.NINE,
    CardNumbers.TEN,
    CardNumbers.JACK,
    CardNumbers.QUEEN,
    CardNumbers.KING,
    CardNumbers.ACE
];
exports.SixPlusDeck = [
    CardNumbers.SIX,
    CardNumbers.SEVEN,
    CardNumbers.EIGHT,
    CardNumbers.NINE,
    CardNumbers.TEN,
    CardNumbers.JACK,
    CardNumbers.QUEEN,
    CardNumbers.KING,
    CardNumbers.ACE
];
