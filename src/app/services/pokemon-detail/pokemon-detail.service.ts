import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const { pokeApi } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  public pokemon: Pokemon;
  public pokemonsCollected: any = [];

  constructor(private readonly http: HttpClient) {}

  public fetchPokemonByName(name:string): void {
     this.http.get<Pokemon>(`${pokeApi}/pokemon/${name}`)
     .pipe(
       map((pokemon : Pokemon) => ({
        ...pokemon,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
       }))
     )
     .subscribe((pokemon: Pokemon) => {
       this.pokemon = pokemon;
     });
  }

  collect(pokemon: any) {
    if (localStorage.getItem('pokemons') == null) {
      this.pokemonsCollected.push(pokemon)
    } else {
      this.pokemonsCollected = JSON.parse(localStorage.getItem('pokemons')) || '';
      this.pokemonsCollected.push(pokemon);
    }
    localStorage.setItem('pokemons', JSON.stringify(this.pokemonsCollected));
  }
}