import { Component, Input, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Vendor } from '../Vendor';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  vendors!: Vendor[];
  blocked_vendor!: Vendor;
  index : number | undefined;

  constructor(private _vendorService: VendorServiceService) {  }

  ngOnInit(): void {
    this.vendors=this. _vendorService.getVendors();
  }
  
  sendObject(vendor: any)
  {
   this.blocked_vendor=vendor;
   this._vendorService.sendToBlocked(this.blocked_vendor);
   console.log(this.vendors);
   this.index = this.vendors.indexOf(vendor);
   this.vendors.splice(this.index,1);

  }


}
