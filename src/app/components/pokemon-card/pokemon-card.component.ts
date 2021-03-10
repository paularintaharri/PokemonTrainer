import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: any;

  @Output() bookDetailRequested: EventEmitter<any> = new EventEmitter();

  sendDetailRequest() {
      //Redirect to the BookDetails Page and Request Book by ID from API
      this.bookDetailRequested.emit(this.pokemon.PokemonId)
  }
}