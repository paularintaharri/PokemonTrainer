import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=> import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'pokemons',
    component: PokemonCatalogueComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'pokemons/:name',
    loadChildren: ()=> import('./components/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'trainer',
    loadChildren: ()=> import('./components/trainer/trainer.module').then(m => m.TrainerModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
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
