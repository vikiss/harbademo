import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { MooringComponent }  from './components/mooring.component';
import { BookingComponent }  from './components/booking.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, MooringComponent, BookingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
