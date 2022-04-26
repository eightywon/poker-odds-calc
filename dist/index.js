"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Omaha = exports.SixPlusHoldem = exports.TexasHoldem = void 0;
const Table_1 = require("./lib/Table");
require("./lib/Utils");
class TexasHoldem extends Table_1.default {
    constructor() {
        super("texas_holdem");
    }
}
exports.TexasHoldem = TexasHoldem;
class SixPlusHoldem extends Table_1.default {
    constructor() {
        super("sixplus_holdem");
    }
}
exports.SixPlusHoldem = SixPlusHoldem;
class Omaha extends Table_1.default {
    constructor() {
        super("omaha");
    }
}
exports.Omaha = Omaha;
