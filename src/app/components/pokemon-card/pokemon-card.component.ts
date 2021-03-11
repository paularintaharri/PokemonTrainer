import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: any;

  @Output() pokemonDetailRequested: EventEmitter<any> = new EventEmitter();

  sendDetailRequest() {
      this.pokemonDetailRequested.emit(this.pokemon.PokemonId)
  }
}