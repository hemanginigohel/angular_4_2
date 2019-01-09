import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Icar } from '../../icar';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  car:Array<Icar>=[];
@Input('cinterface') cinterface:Icar;
  
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    if(changes && changes.cinterface && changes.cinterface.firstChange == false){
      this.car.push(this.cinterface);
      console.log(this.car);
    }
    else{
      console.log("abc");
    }
}

}
