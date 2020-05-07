import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PaperRockScissorsModule} from './paper-rock-scissors/paper-rock-scissors.module';
import {TicTacToeModule} from './tic-tac-toe/tic-tac-toe.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicComponent } from './logic/logic.component';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LogicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaperRockScissorsModule,
    TicTacToeModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
