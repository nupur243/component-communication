import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Vendor } from './modules/vendor/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  Vendors:Vendor[]=  [{
    name: "Niharika",
    age: 23,
    city: "Mumbai"
  },
  {
    name: "Nupur",
    age: 23,
    city: "Jaipur"
  },
  {
    name: "Vandana",
    age: 22,
    city: "AndhraPradesh"
  }];

  getVendors(){
    return this.Vendors;
  }

  sendToBlocked$: Observable<any> | undefined;
  private subject=new Subject<any>();

  sendVendors(){
    this.subject.next(this.Vendors)
  }

 constructor(){
    this.sendToBlocked$=this.subject.asObservable();
 }
 
  sendToBlocked(blocked_vendor: Vendor)
  {
    this.subject.next(blocked_vendor);
  }

}
