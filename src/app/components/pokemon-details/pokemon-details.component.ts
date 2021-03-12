import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailService } from '../../services/pokemon-detail/pokemon-detail.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  private readonly pokemonName: string ='';

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly pokemonDetailService: PokemonDetailService) { 
    this.pokemonName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);
  }

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }
}