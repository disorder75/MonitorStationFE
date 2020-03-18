import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsComponent } from './credits.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

const routes: Routes = [
  {
    path:'',
    component: CreditsComponent
  },
  {
    path:'info',
    component: CreditCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }
