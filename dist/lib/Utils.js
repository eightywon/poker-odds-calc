"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatUnique = exports.CardsFromString = exports.toPercent = exports.Log = void 0;
var Log;
(function (Log) {
    const CONSOLE_COLORS = {
        red: '31',
        green: '32',
        yellow: '33',
        blue: '34',
        magenta: '35',
        cyan: '36',
        white: '37',
        grey: '90'
    };
    function PrintLn(l = "", c = null) {
        if (!l)
            return console.log('');
        if (c)
            return console.log(` ${color(l, c)}`);
        console.log(` ${l}`);
    }
    Log.PrintLn = PrintLn;
    function color(l, c = null) {
        return !c || !CONSOLE_COLORS[c] ? l : `\x1b[${CONSOLE_COLORS[c]}m${l}\x1b[0m`;
    }
    Log.color = color;
})(Log = exports.Log || (exports.Log = {}));
function toPercent(num) {
    return (Math.round(num * 10000) / 100);
}
exports.toPercent = toPercent;
function CardsFromString(str) {
    return str.split(/(?=[AKQJT2-9.][schd.])/);
}
exports.CardsFromString = CardsFromString;
Object.defineProperty(Array.prototype, 'sortCards', {
    configurable: true,
    value: function sortCards() {
        return this.sort((a, b) => b.getRank() - a.getRank());
    },
    writable: true
});
Object.defineProperty(Array.prototype, 'sortPairs', {
    configurable: true,
    value: function sortPairs() {
        return this.sort((a, b) => b[0].getRank() - a[0].getRank());
    },
    writable: true
});
function flatUnique(nested) {
    let _arrays = [];
    let arrays = nested[0].map(a => [a]);
    for (let i = 1, j = nested.length; i < j; i++) {
        const ln = nested[i].length;
        for (let i2 = 0; i2 < ln; i2++) {
            arrays.forEach(arr => {
                _arrays.push([...arr.slice(0), nested[i][i2]]);
            });
        }
        arrays = _arrays.slice(0);
        _arrays = [];
    }
    return arrays;
}
exports.flatUnique = flatUnique;
