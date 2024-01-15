import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { fromEvent, auditTime, from, scan, Observable, Subscriber, Subscription, map, of, concatAll, delay, interval, filter, pipe, observable, Subject } from 'rxjs'
import { audit, buffer, debounceTime, publish, share, shareReplay } from "rxjs/operators"
import { environment } from '../../../../environments/environment';
import { SubscriptionsServiceService } from '../../services/subscriptions-service.service';
import { SubscriptionData } from '../../models/SubscriptionData.model';
import { EventsService } from '../../services/events-service.service';
import { EventData } from '../../models/EventsModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild("btn6", { static: true }) btn6: ElementRef;

  codeString = "";

  selectedLanguage: string;
  languages: { id: string, title: string }[] = [];

  constructor(public subscriptionsServiceService:SubscriptionsServiceService,
    public eventsService:EventsService,
    private translateService: TranslateService) {
  }

  hotObservableWithShareSubject$ = new Subject<string>();
  hotObservableShare = this.hotObservableWithShareSubject$.asObservable().pipe(share());
  coldObservable = new Observable(x=>x.next("Cold "+this.getRandomInt(100)));

  hotObservableSubjectWithShareReply$ = new Subject<string>();
  hotObservableShareReply = this.hotObservableSubjectWithShareReply$.asObservable().pipe(shareReplay());

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  changeLocale() {
    this.translateService.use(this.selectedLanguage)
  }

  public subscriptions:SubscriptionData[]
  public events:EventData[]

  ngOnInit(): void {
    this.subscriptionsServiceService.getSubscriptionsObservble().subscribe(res=>{
      this.subscriptions=res;
    });

    this.eventsService.getEventsObservble().subscribe(res=>{
      this.events=res;
    });

    this.translateService.use(environment.defaultLocale);
    this.selectedLanguage = environment.defaultLocale;

    this.translateService.get(environment.locales.map(x => `LANGUAGES.${x.toUpperCase()}`))
      .subscribe(translations => {
        this.languages = environment.locales.map(x => {
          return {
            id: x,
            title: translations[`LANGUAGES.${x.toUpperCase()}`],
          };
        });
      });

    fromEvent(document, "click").pipe(
      auditTime(2000),
      scan((click) => click + 1, 0))
      .subscribe(res => { console.log(`document are clicked ${res}`) })
  }

  unsubscribeSubscription(sub:SubscriptionData){
    this.subscriptionsServiceService.removeSubscription(sub)
    this.eventsService.log(new EventData("dark","unsubscrinbe",""))
  }
}
