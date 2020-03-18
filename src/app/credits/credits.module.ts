import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { MaterialModule } from '../material-module/material-module.module';


@NgModule({
  declarations: [
    CreditsComponent, 
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    MaterialModule
  ]
})
export class CreditsModule { }
