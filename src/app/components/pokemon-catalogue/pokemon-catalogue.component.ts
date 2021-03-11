import { Component, ComponentFactoryResolver  } from '@angular/core';
import { PokeAPIService } from '../../services/pokeAPI/poke-api.service';

@Component({
  selector: 'pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent {

  pokemon: any[] = [];
  error: String = '';

  constructor(private readonly pokemonService: PokeAPIService) {
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon()
        .subscribe(
          pokemon => {
            this.pokemon = pokemon;
          },
          error => {
            this.error = error.message;
          }
        );
  }
}