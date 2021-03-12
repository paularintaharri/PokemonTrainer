import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonResponse } from '../../models/pokemon-response.model';

const { pokeApi } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private readonly pokemonCache$;
  public pokemon: Pokemon[] = [];
  public error: string = '';

  constructor(private readonly http: HttpClient) {
    this.pokemonCache$ = this.http.get<PokemonResponse>(`${pokeApi}/pokemon`)
      .pipe(shareReplay(1))
   }

  fetchPokemon(): void {
    this.pokemonCache$
    .pipe(
      map((response: PokemonResponse) => {
        return response.results.map((pokemon: Pokemon) =>({
          ...pokemon,
          ...this.getIdAndImage(pokemon.url)
        }));
      })
    )
    .subscribe(
      (pokemon: Pokemon[]) => {
        this.pokemon = pokemon;
      },
      (errorResponse: HttpErrorResponse) => {
        this.error = errorResponse.message;
      }
    )
  }

  private getIdAndImage(url: string): any{
    const id = url.split('/').filter(Boolean).pop();
    return {
      id: Number(id),
      image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };
  }
}