import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonDetailsModule } from './components/pokemon-details/pokemon-details.module';
import { TrainerModule } from './components/trainer/trainer.module';
import { LoginModule } from './components/login/login.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonCardComponent} from './components/pokemon-card/pokemon-card.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent,
    NotFoundComponent,
    PokemonCardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonDetailsModule,
    TrainerModule,
    LoginModule,
    HttpClientModule,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
