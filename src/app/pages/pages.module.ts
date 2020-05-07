import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {PagesRoutingModule} from './pages-routing.module';
import { EscapeComponent } from './escape/escape.component';

@NgModule({
  declarations: [IndexComponent, EscapeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
