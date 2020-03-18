import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphListComponent } from './graph-list/graph-list.component';


@NgModule({
  declarations: [GraphListComponent],
  imports: [
    CommonModule,
    GraphsRoutingModule
  ]
})
export class GraphsModule { }
