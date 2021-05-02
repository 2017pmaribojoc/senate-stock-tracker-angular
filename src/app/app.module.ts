import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisclosureDashboardComponent } from './disclosure-dashboard/disclosure-dashboard.component';
import { SenatorDetailsComponent } from './senator-details/senator-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DisclosureDashboardComponent,
    SenatorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
