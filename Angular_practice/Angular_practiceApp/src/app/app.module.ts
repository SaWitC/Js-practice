import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  /*schemas: [CUSTOM_ELEMENTS_SCHEMA],*/
  declarations: [
    AppComponent,
  ],
  imports: [
    //TranslateModule.forRoot({
    //  loader: {
    //    provide: TranslateLoader,
    //    useFactory: HttpLoaderFactory,
    //    deps: [HttpClient],
    //  },
    //  useDefaultLang: false,
    //}),
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



