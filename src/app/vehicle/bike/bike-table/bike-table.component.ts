import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Ibike } from '../ibike';
@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.css']
})
export class BikeTableComponent implements OnInit {
  bikeArray:Array<Ibike>=[];

  // public bikedata;

  ondbclick(param){
    this.bikeArray.push(param);
    console.log(this.bikeArray);
    // console.log("biketable",this.bikedata);
  }
  constructor() { }

  ngOnInit() {
     
  }
  

}
