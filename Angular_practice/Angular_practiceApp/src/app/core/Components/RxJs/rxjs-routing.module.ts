import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';

const routes: Routes = [
  { path: "",   component:TransformationOperatorsComponent },
  { path: 'creation-opperators', component: CreationOperatorsComponent },
  { path: 'transformation-operators', component: TransformationOperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RxJsRoutingModule { }
