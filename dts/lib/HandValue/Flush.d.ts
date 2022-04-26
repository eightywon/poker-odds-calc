import Card from "../Card";
import Game from "../Game";
import { Nullable } from "../Interfaces";
export default function hasFlush(game: Game, cards: Array<Card>, suits: {
    [key: string]: Array<Card>;
}, num_groups: Array<Array<Card>>, player_cards: Array<Card>, board: Array<Card>): Nullable<Array<Card>>;
