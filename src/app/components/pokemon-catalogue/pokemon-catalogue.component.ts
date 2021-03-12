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

  get pokemon(): Pokemon[]{
    return this.pokemonService.pokemon;
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }
}