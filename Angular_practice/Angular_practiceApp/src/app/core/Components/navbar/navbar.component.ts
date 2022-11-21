import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { fromEvent, auditTime, from, scan, Observable, Subscriber, Subscription, map, of, concatAll, delay, interval, filter, pipe, observable } from 'rxjs'
import { audit, buffer, debounceTime, publish, share, shareReplay } from "rxjs/operators"
import { environment } from '../../../../environments/environment';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("btn6", { static: true }) btn6: ElementRef;

  codeString = "";

  selectedLanguage: string;
  languages: { id: string, title: string }[] = [];

  constructor(private toastr: ToastrService, private translateService: TranslateService) {
  }
  /// region1 used Observable
  
  public foo() {
    console.log("hello");
    return [1,2,3,4];
  }

ng 

  public observ = new Observable((subscriber) => {
    subscriber.next(this.foo());
    subscriber.next(this.foo());
    subscriber.next(this.foo());
    subscriber.error("error");
    subscriber.next(this.foo());
    subscriber.next(this.foo());

    subscriber.complete();
    

  });

  public rxObservable() {
    console.clear();
    this.toastr.clear();
    this.observ
      .pipe(map((x) => x as number[]), scan((x) => x.map(f => f + 2)))
      .subscribe(res => {
        this.toastr.info(res.toString(), "cool");
      },
        err => {
          this.toastr.error(err,"error");
        },
        () => {
          this.toastr.success("Complete");
        });
  }
  ///endregion1

  ///region2 used observer

  observable2 = new Observable((conf) => {
    conf.next(1);
    conf.next(2);
    conf.next(3);
    conf.complete();
  })
  observer = {
    next: x => console.log(`observer got a next value ${x}`),
    err: err => console.log(`observer got a next exception ${err}`),
    complete: () => console.log("observer complete")
  } 
  public rxObserver() {
    console.clear();
    this.observable2.subscribe(this.observer);
  }


  public setMessage(message: any): void {
    this.codeString = message;
  }

  //region 4 subscription
  rxSubscribtion() {
    var observable2 = interval(1000);
 
    var subscribtion = observable2.subscribe((res) => { ; console.log(res) })
    setTimeout(() => subscribtion.unsubscribe(),2000)
    
  }
  //endregion 4

  changeLocale() {
    this.translateService.use(this.selectedLanguage)
  }


  ngOnInit(): void {

    // initialize translate service
    this.translateService.use(environment.defaultLocale);
    this.selectedLanguage = environment.defaultLocale;
    console.log(this.selectedLanguage);

    this.translateService.get(environment.locales.map(x => `LANGUAGES.${x.toUpperCase()}`))
      .subscribe(translations => {
        // init dropdown list with TRANSLATED list of languages from config
        this.languages = environment.locales.map(x => {
          return {
            id: x,
            title: translations[`LANGUAGES.${x.toUpperCase()}`],
          };
        });
      });
    console.log("localisation complete");



    fromEvent(document, "click").pipe(
      auditTime(2000),//this method block all method after previus click
      scan((click) => click + 1, 0))
      .subscribe(res => { console.log(`document are clicked ${res}`) })
  }

  //region 5
  public hiden5: boolean = false;
  rxOperators(even: any) {
    this.hiden5 = true;
    console.log(even);
   
  }

  //endregion5

  //region6
  //cold observable
  ColdObservable = Observable.create((observer: any) => {
    observer.next("first value cold");
  });

  //hot Observable

  HotObservable = Observable.create((observer: any) => {
    observer.next("first hot");
  }).pipe(share());

  ngAfterViewInit() {
    document.getElementById("coldSubbtn1")?.addEventListener("click", () => {
      const sub1 = this.ColdObservable.subscribe((x: any) => this.toastr.info(x))
    });

    document.getElementById("coldSubbtn2")?.addEventListener("click", () => {
      const sub2 = this.ColdObservable.subscribe((x: any) => this.toastr.info(x))
    });


    document.getElementById("hotSubbtn1")?.addEventListener("click", () => {
      const sub1 = this.HotObservable.subscribe((x: any) => this.toastr.info(x))
    });

    document.getElementById("hotSubbtn2")?.addEventListener("click", () => {
      const sub2 = this.HotObservable.subscribe((x: any) => this.toastr.info(x))
    });

    document.getElementById("hotSubbtn1withShareReplay")?.addEventListener("click", () => {
      const sub2 = this.HotObservable2.subscribe((x: any) => this.toastr.info(x))
    });

    document.getElementById("hotSubbtn2withShareReplay")?.addEventListener("click", () => {
      const sub2 = this.HotObservable2.subscribe((x: any) => this.toastr.info(x))
    });
  }


  HotObservable2 = Observable.create((observer: any) => {
    observer.next("first hot");
  }).pipe(shareReplay())


}
