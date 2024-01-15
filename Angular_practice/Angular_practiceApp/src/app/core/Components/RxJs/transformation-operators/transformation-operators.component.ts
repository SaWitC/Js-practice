import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { Observable, observable, of, map, from, mapTo, pluck, scan, expand, mergeMap, interval, buffer, fromEvent, takeUntil, Subject, Subscription, concatMap, take, switchMap, exhaustMap } from 'rxjs';
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

  constructor(public subscriptionsServiceService:SubscriptionsServiceService,public eventsService:EventsService,private toastr: ToastrService) {
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
    this.eventsService.log(new EventData("blue","Add subscription",""))

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const subscrib = of(1, 2, 3, 4, 5).pipe(takeUntil(this.destroy$),map((x) => x * 2)).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsMapTo() {
    this.eventsService.log(new EventData("blue","Add subscription",""))

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const subscrib = of(1, 2, 3, 4, 5).pipe(takeUntil(this.destroy$),mapTo('a')).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsConcatMap() {
    this.eventsService.log(new EventData("blue","Add subscription",""))

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),concatMap(x=>interval(1000).pipe(take(x)))).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsSwirtchMap() {
    this.eventsService.log(new EventData("blue","Add subscription",""))

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),switchMap(x=>interval(1000).pipe(take(x)))).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsExaustMap() {
    this.eventsService.log(new EventData("blue","Add subscription",""))

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),exhaustMap(x=>interval(1000).pipe(take(x)))).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }

  rxJsMergeMap() {
    this.eventsService.log(new EventData("blue","Add subscription",""))

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const subscrib = of(2, 1).pipe(takeUntil(this.destroy$),mergeMap(x=>interval(1000).pipe(take(x)))).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
    this.subscriptionsServiceService.addSubscription(new SubscriptionData("of with map",subscrib,this.page))
  }
}




