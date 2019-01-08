import { Component, OnInit } from '@angular/core';
import { Icar } from '../icar';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit,Icar{
  public wheels;
  public seats;
  car:Array<Icar>=[];
  public name="hemangini";
  constructor() { }
  
  ngOnInit() {
  }
  onclick():Icar{
      let obj1:Icar={

        wheels:this.wheels,
        seats:this.seats
      }
      this.car.push(obj1);
      console.log(obj1);
      return obj1;

  }
    
  
  

}
