import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
registerLocaleData(localePt, 'pt',localePtExtra)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt'}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
