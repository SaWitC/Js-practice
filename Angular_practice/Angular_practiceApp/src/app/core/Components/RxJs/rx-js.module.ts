import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { MatButtonModule } from '@angular/material/button';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { HotAndColdObservablesComponent } from './hot-and-cold-observables/hot-and-cold-observables.component';
import { SubscriptionsServiceService } from '../../services/subscriptions-service.service';
import { ToastrModule } from 'ngx-toastr';
import { RxJsRoutingModule } from './rxjs-routing.module';



@NgModule({
  declarations: [
    CreationOperatorsComponent,
    TransformationOperatorsComponent,
    HotAndColdObservablesComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule,
    RxJsRoutingModule,
    MatButtonModule,
  ],
  exports: [
    CreationOperatorsComponent,
    HotAndColdObservablesComponent,
    TransformationOperatorsComponent,
  ]
})
export class RxJsModule { }
