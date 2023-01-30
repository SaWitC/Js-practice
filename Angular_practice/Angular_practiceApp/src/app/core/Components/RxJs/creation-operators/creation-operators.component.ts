import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs/internal/observable/of';
import { concatAll, fromEvent, from, interval, observable, scan, map, takeUntil } from 'rxjs';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.css']
  
})
export class CreationOperatorsComponent implements OnDestroy {

  constructor(private toastr: ToastrService) {
  }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

  @Output() onMsgClicked = new EventEmitter<any>();

  rxOf() {
    this.toastr.clear();
    this.onMsgClicked.emit( 'of("hello", "world", "hd").pipe(concatAll())');

    of("hello", "world", "hd")
      .pipe(untilDestroyed(this), concatAll())
      .subscribe(res => this.toastr.info(res), err => { this.toastr.error(err, "error") }, () => { this.toastr.success("complete") });
  }
  rxOf2() {

    of(1, 2, 3).pipe(untilDestroyed(this)).subscribe(res => this.toastr.info(res.toString(), "Result"), null, () => this.toastr.success("complete"));

    this.onMsgClicked.emit('"of(1, 2, 3)"');
  }

  observer = {
    next: x => this.toastr.info(`observer got a next value ${x}`),
    err: err => this.toastr.error(`observer got a next exception ${err}`),
    complete: () => this.toastr.success("observer complete")
  };

  observerWithoutComplete = {
    next: x => this.toastr.info(`observer got a next value ${x}`),
    err: err => this.toastr.error(`observer got a next exception ${err}`),
  };

  interval1$ = interval(1000)
  subscribeInterval1;
  isSubscribed = false;

  rxIntervalSubscribe() {
    if (!this.isSubscribed)
      this.subscribeInterval1 = this.interval1$.pipe(untilDestroyed(this)).subscribe(this.observer);
    this.isSubscribed = true;
  }
  rxIntervalUnsubscribe() {
    this.subscribeInterval1.unsubscribe()
    this.isSubscribed = false;
  }

  rxFrom1() {
    this.onMsgClicked.emit('from([1, 2, 3, 4, 5]).pipe(scan((acc: any, val) => acc.concat(val), []))')
    const observer$ = from([1, 2, 3, 4, 5]).pipe(untilDestroyed(this), scan((acc: any, val) => acc.concat(val), [])).subscribe(
      (res: any) => { this.toastr.info(res.toString(), "info"); },
      (err) => { this.toastr.error(err) },
      () => { setTimeout(() => { console.log(111); this.toastr.success("complete"); }, 2000); observer$.unsubscribe() });
  }

  rxFrom2() {
    this.onMsgClicked.emit(' from(["hello", "world"]).pipe(concatAll())')
    const observer$ = from(["hello", "world"]).pipe(untilDestroyed(this), concatAll()).subscribe(
     x => this.toastr.info(`observer got a next value ${x}`),
      err => this.toastr.error(`observer got a next exception ${err}`),
      () => { this.toastr.success("observer complete"); observer$.unsubscribe() }
    );

    
  }
}
