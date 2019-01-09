import { Component, OnInit } from '@angular/core';
import { Icar } from '../icar';
//import { Ibike } from '../../bike/ibike';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  // public wheels;
  // public seats;
  // car:Array<Icar>=[];
  // public name="hemangini";
  // constructor() { }

  ngOnInit() {
  }
  // onclick():Icar{
  //     let obj1:Icar={

  //       wheels:this.wheels,
  //       seats:this.seats
  //     }
  //     this.car.push(obj1);
  //     console.log(obj1);
  //     return obj1;

  // }
  cinterface: Icar;
  obj1: Icar = {
    cwheels: null,
    cseats: null
  }
  onclick(): void {
    this.cinterface = {
      cwheels: this.obj1.cwheels,
      cseats: this.obj1.cseats
    }
    console.log(this.cinterface);
  }
}
