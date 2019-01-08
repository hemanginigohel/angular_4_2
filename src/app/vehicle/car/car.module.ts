import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarFormComponent } from './car-form/car-form.component';
import { CarTableComponent } from './car-form/car-table/car-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,BrowserModule,FormsModule
  ],
  declarations: [CarFormComponent, CarTableComponent],
  exports:[CarFormComponent,CarTableComponent]
})
export class CarModule { }
