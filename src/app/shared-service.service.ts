import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { vendor } from './modules/vendor/vendor';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  subject = new Subject<vendor>()
}
