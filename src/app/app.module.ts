import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TicTacToeModule} from './tic-tac-toe/tic-tac-toe.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicComponent } from './logic/logic.component';
import { ScoreSheetComponent } from './tic-tac-toe/score-sheet/score-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicComponent,
    ScoreSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicTacToeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
