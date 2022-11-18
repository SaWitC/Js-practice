import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { MatButtonModule } from '@angular/material/button';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';



@NgModule({
  declarations: [
    CreationOperatorsComponent,
    TransformationOperatorsComponent
  ],
  ///*//schemas: [CUSTOM_ELEMENTS_SCHEMA],*/
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CreationOperatorsComponent,
    TransformationOperatorsComponent
    //MatButtonModule
  ]
  
})
export class RxJsModule { }
