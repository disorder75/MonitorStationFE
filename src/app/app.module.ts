import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';

// Material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

// app
import { DashboardComponent } from './dashboard/dashboard.component'

//route
import { AppRoutingModule } from './app-routing.module';
import { DevicesModule } from './devices/devices.module';
import { GraphsModule } from './graphs/graphs.module';
import { CreditsModule } from './credits/credits.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    //app
    DevicesModule,
    GraphsModule,
    CreditsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
