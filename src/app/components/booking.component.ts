import { Component } from '@angular/core';
import { MoordataService } from  '../services/moordata.service';
import { HelperService } from  '../services/helper.service';

@Component({
  moduleId: module.id,
  selector: 'booking',
  templateUrl: 'booking.component.html',
  providers: [MoordataService, HelperService]
})
 
 export class BookingComponent {
  title: string;
  moors:Moor[];
  constructor(private moordataService: MoordataService) {
  this.title = "Reservations";
  this.moordataService.getMoors().subscribe(moors => {
   this.moors = moors;
  });
}
  
}

interface Moor{
  id: number;
  status: string;
  arrival: string;
  departure: string;
  size: number;
  sizeunit: string;
  price: number;
  currency: string;
  bridge: string;
  position: number;
  harbor: string;
  boat: string;
  captain: string;

}

