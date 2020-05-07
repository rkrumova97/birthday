import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'paper-rock-scissors',
    loadChildren: () => import('./paper-rock-scissors/paper-rock-scissors.module').then(m => m.PaperRockScissorsModule)
  },
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('./tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
