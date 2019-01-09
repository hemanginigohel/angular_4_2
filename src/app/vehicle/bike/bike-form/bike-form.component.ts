import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {
  @Output() bikevar = new EventEmitter();
  binterface: Ibike;
  obj1: Ibike = {

    wheels: null,
    seats: null

  };

  constructor() { }

  ngOnInit() {
  }
  onclick(): void {
    // this.bike.push(obj1);
    // console.log(obj1);
    // this.bikevar.emit(this.bike);
    // return obj1;
    this.binterface = {
      wheels: this.obj1.wheels,
      seats: this.obj1.seats
    }
    this.bikevar.emit(this.binterface);
  }


}
