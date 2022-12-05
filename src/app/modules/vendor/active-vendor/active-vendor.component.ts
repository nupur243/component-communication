import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
// import { EventEmitter } from 'stream';
import { vendor } from '../vendor';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit, OnChanges{

  @Input()
  vendor!: vendor[];

  @Output() public sendData=new EventEmitter<any>();

  showData(event: any){
    this.sendData.emit(event);
  }

 input_vendor!: vendor[];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   this.input_vendor= changes['vendor'].currentValue;
  }

  ngOnInit() {

  }

}
