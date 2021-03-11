import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const { pokeApi } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private readonly http: HttpClient) { }

  fetchPokemon(): Observable<any> {
    return this.http.get(`${pokeApi}/pokemon`)
    .pipe(
      map((response: any) => response.results)
    )
  }
}