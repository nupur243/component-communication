import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { vendor } from './vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {


  // vendors : vendor[];

  vendors=[{
    name: "Niharika",
    age: "23",
    city: "Mumbai"
  },
  {
    name: "Nupur",
    age: "23",
    city: "Jaipur"
  },
  {
    name: "Vandana",
    age: "22",
    city: "AndhraPradesh"
  }]
  
  constructor() {
   }

 
   getValue:Object | undefined;
   sendData(value: Object){
  
    this.getValue=value;
    // this.age=value.age;
    // this.city=value.city;
       }

  ngOnInit(): void {
  }

}
