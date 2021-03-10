import { Component, ComponentFactoryResolver  } from '@angular/core';

@Component({
  selector: 'pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent {
  public pokemons = [
    {
        Name: 'caterpie',
        PokemonId: 1,
        PokemonImg: 'ghththh.png',
    },
    {
        Name: 'metapod',
        PokemonId: 2,
        PokemonImg: 'ghththh.png',
    },
    {
        Name: 'weedle',
        PokemonId: 3,
        PokemonImg: 'ghththh.png',
    },
];


  showPokemonDetails(message) {
    console.log(message)
  }

}