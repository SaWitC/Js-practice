import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RxJsModule } from '../RxJs/rx-js.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    NgStyle,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
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
  exports: [NavbarComponent],
  providers: []
})
export class CoreModule { }


export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}
