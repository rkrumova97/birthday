import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {EscapeComponent} from './escape/escape.component';


export class PagesRoutes {
  static pagesRoutes: Routes = [
    {
      path: '',
      component: IndexComponent,
    } ,
    {
      path: 'escape',
      component: EscapeComponent,
    }
  ];
}

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes.pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
