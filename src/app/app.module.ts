import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
