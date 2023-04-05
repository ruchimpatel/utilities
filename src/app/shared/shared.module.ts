import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule 
  ],
  exports : [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule 
  ]
})
export class SharedModule { }
