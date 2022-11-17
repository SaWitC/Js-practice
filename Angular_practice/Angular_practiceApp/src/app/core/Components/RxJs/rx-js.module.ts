import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CreationOperatorsComponent],
  ///*//schemas: [CUSTOM_ELEMENTS_SCHEMA],*/
  imports: [
    CommonModule,
    //MatButtonModule
  ],
  exports: [
    CreationOperatorsComponent,
    //MatButtonModule
  ]
  
})
export class RxJsModule { }
