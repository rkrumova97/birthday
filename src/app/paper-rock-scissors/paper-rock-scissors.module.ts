import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperRockScissorsComponent } from './paper-rock-scissors.component';
import {PaperRockScissorsRoutingModule} from './paper-rock-scissors-routing.module';

@NgModule({
  declarations: [PaperRockScissorsComponent],
  imports: [
    CommonModule,
    PaperRockScissorsRoutingModule,
  ]
})
export class PaperRockScissorsModule { }
