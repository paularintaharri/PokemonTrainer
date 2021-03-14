import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonResponse } from '../../models/pokemon-response.model';

const { pokeApi } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private readonly pokemonCache$;
  public _pokemon: Pokemon[] = [];
  public error: string = '';
  private offset = 0;
  private limit = 10;
  public count = 0;
  public isLastPage = false;
  public isFirstPage = true;

  constructor(private readonly http: HttpClient) {
    this.pokemonCache$ = this.http.get<PokemonResponse>(`${pokeApi}/pokemon?limit=50`)
      .pipe(shareReplay(1))
  }

  public get pokemon(): Pokemon[]{
    return this._pokemon.slice(
      this.offset,
      this.offset + this.limit
    );
  }

  public next(): void {
    const nextOffset = this.offset + this.limit;
    if(nextOffset <= this.count -1){
      this.offset += this.limit; 
    }
    this.updatePageStatus();
  }

  public prev(): void {
    if (this.offset !== 0) {
      this.offset -= this.limit;
    }
    this.updatePageStatus();
  }

  private updatePageStatus(): void {
    this.isFirstPage = this.offset === 0;
    this.isLastPage = this.offset === this.count - this.limit;
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
        this._pokemon = pokemon;
        this.count = pokemon.length;
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

  getPokemonByName(name: string) {
    let pokemonCollected;
    for (const checkpokemon of this._pokemon) {
      if (checkpokemon.name === name) {
        pokemonCollected = checkpokemon;
      }
    }
    return pokemonCollected;
  }  
}