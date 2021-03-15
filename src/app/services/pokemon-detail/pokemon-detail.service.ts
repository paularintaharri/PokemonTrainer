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

  constructor(private readonly http: HttpClient) { }

  public fetchPokemonByName(name: string): void {
    this.http.get<Pokemon>(`${pokeApi}/pokemon/${name}`)
      .pipe(
        map((pokemon: Pokemon) => ({
          ...pokemon,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        }))
      )
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
      });
  }
}