import { Component } from '@angular/core';
import { MoordataService } from  '../services/moordata.service'

@Component({
  moduleId: module.id,
  selector: 'mooring',
  templateUrl: 'mooring.component.html',
  providers: [MoordataService]
})
 
 export class MooringComponent {
  title: string;
  moors:Moor[];
  
  constructor(private moordataService: MoordataService) {
  this.title = "Visitors";
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

