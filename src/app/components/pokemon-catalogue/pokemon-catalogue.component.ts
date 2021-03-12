import { Component, ComponentFactoryResolver, OnInit  } from '@angular/core';
import { PokeAPIService } from '../../services/pokeAPI/poke-api.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {

  constructor(private readonly pokemonService: PokeAPIService) {
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }

  get pokemon(): Pokemon[]{
    return this.pokemonService.pokemon;
  }

  get isFirstPage(): boolean {
    return this.pokemonService.isFirstPage;
  }

  get isLastPage(): boolean {
    return this.pokemonService.isLastPage;
  }

  onPrevClick(): void {
    this.pokemonService.prev();
  }

  onNextClick(): void {
    this.pokemonService.next();
  }
}