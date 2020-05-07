import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import {TicTacToeRoutingModule} from './tic-tac-toe-routing.module';

@NgModule({
  declarations: [ScoreSheetComponent, BoardComponent, SquareComponent],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }
