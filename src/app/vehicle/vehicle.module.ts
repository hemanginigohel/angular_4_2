import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CarModule } from './car/car.module';
import { FormsModule } from '@angular/forms';
import { BikeModule } from './bike/bike.module';


@NgModule({
  imports: [
    CommonModule,CarModule,BrowserModule,FormsModule,BikeModule
  ],
  declarations: [],
  exports:[CarModule,BikeModule]
})
export class VehicleModule { }
