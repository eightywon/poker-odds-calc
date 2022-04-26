import Card from "./Card";
import Game from "./Game";
export default class Deck {
    private game;
    private cards;
    constructor(game: Game);
    getCards(): Array<Card>;
    getAvailableCards(): Card[];
}
