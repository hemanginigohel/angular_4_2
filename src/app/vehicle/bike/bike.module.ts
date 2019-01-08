import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeTableComponent } from './bike-table/bike-table.component';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [BikeTableComponent, BikeFormComponent, ChildComponent],
  exports:[BikeTableComponent,BikeFormComponent,ChildComponent]
})
export class BikeModule { 
  
}
