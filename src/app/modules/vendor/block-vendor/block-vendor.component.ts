import { Component, Input, OnInit } from '@angular/core';
import { vendor } from '../vendor';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

//   @Input() getValue!: any;

//  valueArray: vendor[]=[];

//  invokeThis(){
//   this.valueArray.push(this.getValue);
//  console.log(this.valueArray);
//  }

  ngOnInit(): void {
  
    // console.log(this.valueArray)
    // console.log("hello");
  }

}
