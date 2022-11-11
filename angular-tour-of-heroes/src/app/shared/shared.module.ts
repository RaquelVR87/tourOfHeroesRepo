import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    FormsModule,
    DialogModule,
    TableModule,
    ButtonModule
  ]
})
export class SharedModule { }
