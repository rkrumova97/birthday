import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PaperRockScissorsComponent} from './paper-rock-scissors.component';

export class PaperRockScissorsRoutes {
  static paperRockScissorsRouting: Routes = [
    {
      path: '',
      component: PaperRockScissorsComponent
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(PaperRockScissorsRoutes.paperRockScissorsRouting)],
  exports: [RouterModule]
})
export class PaperRockScissorsRoutingModule { }
