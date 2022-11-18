import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RxJsModule } from '../Components/RxJs/rx-js.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RxJsModule
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NavbarComponent],
  providers: []
})
export class CoreModule { }
