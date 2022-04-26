export declare type Games = "texas_holdem" | "sixplus_holdem" | "omaha";
export declare type IHand = [string] | [string, string] | [string, string, string, string];
export declare type ISuit = Suits.CLUBS | Suits.SPADES | Suits.HEARTS | Suits.DIAMONDS;
export declare type Nullable<T> = T | null;
export declare const AvailableGames: string[];
export declare enum Suits {
    HEARTS = "h",
    CLUBS = "c",
    DIAMONDS = "d",
    SPADES = "s"
}
export declare const SuitsList: Suits[];
export declare enum CardNumbers {
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = "T",
    JACK = "J",
    QUEEN = "Q",
    KING = "K",
    ACE = "A"
}
export declare type ICardNumber = CardNumbers.TWO | CardNumbers.THREE | CardNumbers.FOUR | CardNumbers.FIVE | CardNumbers.SIX | CardNumbers.SEVEN | CardNumbers.EIGHT | CardNumbers.NINE | CardNumbers.TEN | CardNumbers.JACK | CardNumbers.QUEEN | CardNumbers.KING | CardNumbers.ACE;
export declare const FullDeck: CardNumbers[];
export declare const SixPlusDeck: CardNumbers[];
