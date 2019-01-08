import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.css']
})
export class BikeTableComponent implements OnInit {
  public bikedata;
  ondbclick(param){
    this.bikedata=param;
    
    console.log("biketable",this.bikedata);
  }
  constructor() { }

  ngOnInit() {
     
  }
  

}
