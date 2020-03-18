import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphListComponent } from './graph-list/graph-list.component';

const routes: Routes = [
  {
    path:'',
    component: GraphListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
