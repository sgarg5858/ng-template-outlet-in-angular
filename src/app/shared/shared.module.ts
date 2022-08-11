import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './ui/table/table.component';
import { BadTableComponent } from './ui/bad-table/bad-table.component';



@NgModule({
  declarations: [
    TableComponent,
    BadTableComponent
  ],
  exports:[TableComponent,BadTableComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
