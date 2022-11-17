import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/Components/navbar/navbar.component';
import { CoreModule } from './core/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RxJsModule } from './core/Components/RxJs/rx-js.module';

@NgModule({
  /*schemas: [CUSTOM_ELEMENTS_SCHEMA],*/
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //RxJsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }