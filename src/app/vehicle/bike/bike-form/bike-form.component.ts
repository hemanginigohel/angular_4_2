import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Ibike } from '../ibike';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {
  @Output() bikevar = new EventEmitter;
  public wheels;
  public seats;
  bike:Array<Ibike>=[];
  constructor() { }

  ngOnInit() {
  }
  onclick():Ibike{
    let obj1:Ibike={

      wheels:this.wheels,
      seats:this.seats
    }
    this.bike.push(obj1);
    console.log(obj1);
    this.bikevar.emit(this.bike);
    return obj1;

}
  
  anothermethod(event){
    console.log(event,"inside parent");
  }
}
