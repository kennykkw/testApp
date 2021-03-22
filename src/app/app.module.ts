import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { jqxBarGaugeComponent }  from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';  

@NgModule({
  declarations: [
    AppComponent,
    jqxBarGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
