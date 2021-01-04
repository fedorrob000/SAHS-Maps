import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {CanvasComponent} from './canvas/canvas.component';
import {AppRoutingModule} from './app-routing.module'; // CLI imports AppRoutingModule
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
