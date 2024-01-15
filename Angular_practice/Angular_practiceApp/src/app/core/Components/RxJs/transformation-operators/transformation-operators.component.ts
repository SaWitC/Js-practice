import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {of, map, mapTo, mergeMap, interval, takeUntil, Subject, concatMap, take, switchMap, exhaustMap } from 'rxjs';
import { EventData } from 'src/app/core/models/EventsModel';
import { SubscriptionData } from 'src/app/core/models/SubscriptionData.model';
import { EventsService } from 'src/app/core/services/events-service.service';
import { SubscriptionsServiceService } from 'src/app/core/services/subscriptions-service.service';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.css']
})
export class TransformationOperatorsComponent implements OnDestroy {

  private destroy$ = new Subject<void>()

  constructor(public subscriptionsServiceService:SubscriptionsServiceService,public eventsService:EventsService) {
  }

  private readonly page ="transformation-operators";
  ngOnDestroy(): void {
    this.eventsService.log(new EventData("orange","ngOnDestroy",""))
    //extra code that is used only to display how it works
    this.toastr.warning("onDestroy")
    this.destroy$.asObservable().subscribe(x=>{
      this.subscriptionsServiceService.removeSubscriptionByPage(this.page)
    })

    //main destroy code
    this.destroy$.next();
    this.destroy$.complete();
  }

  @Output() onMsgClicked = new EventEmitter<any>();

  public codeMap=`
  const subscrib = of(1, 2, 3, 4, 5)
  .pipe(takeUntil(this.destroy$), map((x) => x * 2) )`

  public codeMapTo=`
  const subscrib = of(1, 2, 3, 4, 5)
  .pipe(takeUntil(this.destroy$),concatMap((x) =>('a')))`

  public codeMergeMap=`
  const subscrib = of(2, 1)
  .pipe(takeUntil(this.destroy$),mergeMap(x=>interval(1000).pipe(take(x))))`

  public codeConcatMap=`
  const subscrib = of(2, 1)
  .pipe(takeUntil(this.destroy$),concatMap(x=>interval(1000).pipe(take(x))))`

  public codeExausteMap=`
  const subscrib = of(2, 1)
  .pipe(takeUntil(this.destroy$),exaustMap(x=>interval(1000).pipe(take(x))))`

  public codeSwitchMap=`
  const subscrib = of(2, 1)
  .pipe(takeUntil(this.destroy$),switchMap(x=>interval(1000).pipe(take(x))))`

  rxJsMap() {
    this.eventsService.log(new EventData("blue","Add subscription with map",""))

    const subscrib = of(1, 2, 3, 4, 5).pipe(takeUntil(this.destroy$),map((x) => x * 2))
    .subscribe(
      res => this.eventsService.logInfo("observer got value " + res),
      err => this.eventsService.logSuccseed(err),
      () => {
        this.eventsService.logSuccseed("complete")}
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsMapTo() {
    this.eventsService.log(new EventData("blue","Add subscription with mapTo",""))

    const subscrib = of(1, 2, 3, 4, 5).pipe(takeUntil(this.destroy$),mapTo('a'))
    .subscribe(
      res => this.eventsService.logInfo("observer got value " + res),
      err => this.eventsService.logSuccseed(err),
      () => {
        this.eventsService.logSuccseed("complete")}
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsConcatMap() {
    this.eventsService.log(new EventData("blue","Add subscription with ConcatMap",""))

    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),concatMap(x=>interval(1000).pipe(take(x))))
    .subscribe(
      res => this.eventsService.logInfo("observer got value " + res),
      err => this.eventsService.logSuccseed(err),
      () => {
        this.eventsService.logSuccseed("complete")}
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsSwitchMap() {
    this.eventsService.log(new EventData("blue","Add subscription with switchMap",""))

    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),switchMap(x=>interval(1000).pipe(take(x))))
    .subscribe(
      res => this.eventsService.logInfo("observer got value " + res),
      err => this.eventsService.logSuccseed(err),
      () => {
        this.eventsService.logSuccseed("complete")}
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsExaustMap() {
    this.eventsService.log(new EventData("blue","Add subscription with exhaustMap",""))

    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),exhaustMap(x=>interval(1000).pipe(take(x))))
    .subscribe(
      res => this.eventsService.logInfo("observer got value " + res),
      err => this.eventsService.logSuccseed(err),
      () => {
        this.eventsService.logSuccseed("complete")}
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsMergeMap() {
    this.eventsService.log(new EventData("blue","Add subscription with mergeMap",""))

    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),mergeMap(x=>interval(1000).pipe(take(x))))
    .subscribe(
      res => this.eventsService.logInfo("observer got value " + res),
      err => this.eventsService.logSuccseed(err),
      () => {
        this.eventsService.logSuccseed("complete")}
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }
}




