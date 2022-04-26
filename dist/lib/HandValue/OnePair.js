"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function OnePair(game, cards, suits, num_groups, player_cards, board) {
    let pair = num_groups.find(g => g.length === 2);
    if (pair) {
        if (game.isOmaha()) {
            const matches = player_cards.filter(pc => !!pair.find(m => m.toString() === pc.toString()));
            const ln = matches.length;
            player_cards.sortCards();
            board.sortCards();
            let op = null;
            if (ln === 2) {
                op = board.slice(0, 3);
            }
            else if (ln === 1) {
                op = [
                    ...board.filter(c => !pair.find(ngc => c.toString() === ngc.toString())).slice(0, 2),
                    player_cards.find(c => !pair.find(ngc => c.toString() === ngc.toString()))
                ];
            }
            else if (ln === 0) {
                op = [
                    board.find(c => !pair.find(ngc => c.toString() === ngc.toString())),
                    ...player_cards.slice(0, 2)
                ];
            }
            if (op) {
                op.sortCards();
                return [...pair, ...op];
            }
        }
        else {
            return [...pair, ...cards.filter(card => {
                    return card.getNum() !== pair[0].getNum();
                }).slice(0, 3)];
        }
    }
    return null;
}
exports.default = OnePair;
