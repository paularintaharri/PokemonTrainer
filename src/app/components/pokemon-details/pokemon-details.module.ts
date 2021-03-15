import { NgModule } from '@angular/core';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailsComponent
  }
];

@NgModule({
  declarations: [
    PokemonDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes), CommonModule
  ],
  exports: [RouterModule]
})
export class PokemonDetailsModule { }
