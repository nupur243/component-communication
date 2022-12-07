import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Vendor } from '../Vendor';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  blocked_vendors: Array<Vendor> = [];
  // vendors!: Vendor[];
  // blocked_vendor: Vendor | undefined;

  constructor(private _vendorService: VendorServiceService) {
  }
  
  
  ngOnInit(): void {
    // this.vendors=this. _vendorService.getVendors();

    this._vendorService.sendToBlocked$?.subscribe((vendor) => {
      this.blocked_vendors.push(vendor);
      console.log(vendor);
    })
  }

}
