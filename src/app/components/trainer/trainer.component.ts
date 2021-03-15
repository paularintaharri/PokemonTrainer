import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokeAPIService } from 'src/app/services/pokeAPI/poke-api.service';
import { TrainerService } from 'src/app/services/trainer/trainer.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  collectedPokemons: Pokemon[] = [];
  public notEmpty: boolean;

  constructor(
    private readonly pokemonService: PokeAPIService,
    private readonly trainerService: TrainerService,
    private session: SessionService) {
  }

  ngOnInit(): void {
    const collected = this.trainerService.getCollected();
    for (const key of collected) {
      const pokemon = this.pokemonService.getPokemonByName(key);
      if (pokemon !== undefined) {
        this.collectedPokemons.push(pokemon);
        this.notEmpty = true;
      }
    }
  }

  public onLogOut() {
    this.session.logout();
  }
}