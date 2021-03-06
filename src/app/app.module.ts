import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { TicketStatusComponent } from './ticket-status/ticket-status.component';
import {HighchartsChartModule} from 'highcharts-angular';




@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DashboardComponent,
    TicketStatusComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HighchartsChartModule,
   
   
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
