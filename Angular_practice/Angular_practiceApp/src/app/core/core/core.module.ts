import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RxJsModule } from '../Components/RxJs/rx-js.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RxJsModule,
     TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient],
       },
       useDefaultLang: false,
     }),
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NavbarComponent],
  providers: []
})
export class CoreModule { }


export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}
