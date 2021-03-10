import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent,
    PokemonCardComponent,
    NotFoundComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
