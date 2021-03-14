import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor() { }

  collectPokemon(pokemon: string) {
    let pokemonCollection = [];
    if (localStorage.getItem('pokemons') == null) {
      pokemonCollection.push(pokemon)
    } else {
      pokemonCollection = JSON.parse(localStorage.getItem('pokemons'));
      pokemonCollection.push(pokemon)
    }
    localStorage.setItem('pokemons', JSON.stringify(pokemonCollection));
  }

  getCollected() {
    let pokemonCollection = JSON.parse(localStorage.getItem('pokemons'));
    return pokemonCollection;
  }
}
