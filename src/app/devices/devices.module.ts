import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';


@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
