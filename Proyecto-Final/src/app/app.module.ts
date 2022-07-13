import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardsComponent } from './cards/cards.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { InformationComponent } from './information/information.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CardsComponent,
    GameComponent,
    HomeComponent,
    SearchComponent,
    InformationComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
