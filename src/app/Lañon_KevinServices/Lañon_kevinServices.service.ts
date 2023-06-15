import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lañon_kevinServicesService {

  temp: any;

  constructor() { }

  getTemp() {
    return this.temp;
  }

  setTemp(value: any) {
    this.temp = value;
  }

}
