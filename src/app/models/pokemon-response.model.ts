import { Pokemon } from "./pokemon.model";

export interface PokemonResponse {
    results: any;
    next: string;
    count: number;
    prev: string;
    result: Pokemon[];
}