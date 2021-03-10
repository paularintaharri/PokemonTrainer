import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  private readonly BookId: number;

  constructor(private route: ActivatedRoute) { 
    this.BookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
