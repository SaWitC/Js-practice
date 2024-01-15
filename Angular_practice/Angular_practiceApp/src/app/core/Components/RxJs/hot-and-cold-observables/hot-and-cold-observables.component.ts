import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, Subscription, share, shareReplay } from 'rxjs';
import { EventData } from 'src/app/core/models/EventsModel';
import { SubscriptionData } from 'src/app/core/models/SubscriptionData.model';
import { EventsService } from 'src/app/core/services/events-service.service';
import { SubscriptionsServiceService } from 'src/app/core/services/subscriptions-service.service';

@Component({
  selector: 'app-hot-and-cold-observables',
  templateUrl: './hot-and-cold-observables.component.html',
  styleUrls: ['./hot-and-cold-observables.component.css']
})
export class HotAndColdObservablesComponent implements OnInit ,OnDestroy{

  constructor(public subscriptionsServiceService:SubscriptionsServiceService,public eventsService:EventsService,public toastr:ToastrService) { }
  ngOnDestroy(): void {
  }

  private subscriptions:Subscription[]=[];

  ngOnInit(): void {
    this.eventsService.log(new EventData("green","ngOnInit",""))
  }

  hotObservableWithShareSubject$ = new Subject<string>();
  hotObservableShare = this.hotObservableWithShareSubject$.asObservable().pipe(share());
  coldObservable = new Observable(x=>x.next("Cold "+this.getRandomInt(100)));

  hotObservableSubjectWithShareReply$ = new Subject<string>();
  hotObservableShareReply = this.hotObservableSubjectWithShareReply$.asObservable().pipe(shareReplay());

  subscribeColdSubscription(){
    this.eventsService.log(new EventData("blue","Add subscription",""))
    const sub = this.coldObservable.subscribe((x: any) => this.toastr.info(x))
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("Cold",sub,"hot-cold-observ"));
    this.subscriptions.push(sub);
  }

  triggerHotSubscriptionWithShare(){
    this.hotObservableWithShareSubject$.next("hot with share 1"+this.getRandomInt(100));
  }

  subscribeHotSubscriptionWithShare(){
    this.eventsService.log(new EventData("blue","Add subscription",""))
    const sub = this.hotObservableShare.subscribe((x: any) => this.toastr.info(x))
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("HOT with shar",sub,"hot-cold-observ"));
    this.subscriptions.push(sub);
  }

  triggerHotSubscriptionWithSchareReply(){
    this.hotObservableSubjectWithShareReply$.next("hot with shareReplay 1"+this.getRandomInt(100));
  }

  subscribeHotSubscriptionWithShareReply(){
    this.eventsService.log(new EventData("blue","Add subscription",""))
    const sub = this.hotObservableShareReply.subscribe((x: any) => this.toastr.info(x))
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("HOT with shareReplay",sub,"hot-cold-observ"));
    this.subscriptions.push(sub);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

}
