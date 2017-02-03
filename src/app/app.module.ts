import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination'

import { AppComponent }  from './app.component';
import { MooringComponent }  from './components/mooring.component';
import { BookingComponent }  from './components/booking.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(), Ng2PaginationModule  ],
  declarations: [ AppComponent, MooringComponent, BookingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }