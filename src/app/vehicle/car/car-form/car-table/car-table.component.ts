import { Component, OnInit, Input } from '@angular/core';
import { Icar } from '../../icar';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
@Input('carArray') car:Array<Icar>;
  
  constructor() { }

  ngOnInit() {
  }

}
