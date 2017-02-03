import { Injectable } from '@angular/core';


@Injectable()
export class HelperService {
   constructor() {

   }
   
   dateTimeReviver(key:any, value:any) {
    var a:any;
    if (typeof value === 'string') {
        a = /\/Date\((\d*)\)\//.exec(value);
        if (a) {
            return new Date(+a[1]);
        }
    }
    return value;
}



}


