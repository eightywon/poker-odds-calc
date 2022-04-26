"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHighCards(game, cards, suits, num_groups, player_cards, board) {
    if (game.isOmaha()) {
        player_cards.sortCards();
        board.sortCards();
        return [
            ...player_cards.slice(0, 2),
            ...board.slice(0, 3)
        ].sortCards();
    }
    return cards.slice(0, 5);
}
exports.default = getHighCards;
