 import { Injectable } from '@angular/core';
 import { Http } from '@angular/http';
 import 'rxjs/add/operator/map';
 
 @Injectable()
 export class MoordataService {
  constructor(private http: Http) {
     }
     
     getMoors() { 
    
      return this.http.get('../dummydata/boatscoming.json')
        .map(res => res.json());
        }     
  
 }