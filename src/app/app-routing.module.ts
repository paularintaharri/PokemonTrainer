import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pokemons',
    component: PokemonCatalogueComponent
  },
  {
    path: 'pokemons/:id',
    component: PokemonDetailsComponent
  },
  {
    path: 'trainer',
    component: TrainerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
