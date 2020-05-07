import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BoardComponent} from './board/board.component';


export class TicTacToeRoutes {
  static ticTacToeRoutes: Routes = [
    {
      path: '',
      component: BoardComponent,
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(TicTacToeRoutes.ticTacToeRoutes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
