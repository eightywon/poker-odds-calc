import Card from "./Card";
import { IHand, Nullable } from "./Interfaces";
export declare module Log {
    function PrintLn(l?: string, c?: Nullable<string>): void;
    function color(l: string, c?: Nullable<string>): string;
}
export declare function toPercent(num: number): number;
export declare function CardsFromString(str: string): IHand;
export declare function flatUnique(nested: Array<Array<Card>>): Array<Array<Card>>;
