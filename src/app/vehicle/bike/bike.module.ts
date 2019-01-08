import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeTableComponent } from './bike-table/bike-table.component';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [BikeTableComponent, BikeFormComponent],
  exports:[BikeTableComponent,BikeFormComponent]
})
export class BikeModule { 
  
}
