import { Component, OnInit } from '@angular/core';
import { fromEvent, scan, Observable, Subscriber, Subscription, map, of, concatAll, delay, interval } from 'rxjs'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  /// region1 used Observable
  
  public foo() {
    console.log("hello");
    return [1,2,3,4];
  }

  public observ = new Observable((subscriber) => {
    var x = this.foo();
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
    this.observ
      .pipe(map((x) => x as number[]), scan((x) => x.map(f => f + 2)))
      .subscribe(res => {
        console.log(res);
      },
        err => {
          console.log(err)
        },
        () => {
          console.log("complete");
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
  ///endregion2
  //region 3 used of

  rxOf() {
    console.clear();
    of(1, 2, 3).subscribe(res => console.log(res));
    ///concatAll
    of("hello", "world", "hd")
      .pipe(concatAll())
      .subscribe(res => console.log(res));
  }

  //region 4 subscription
  rxSubscribtion() {
    var observable2 = interval(1000);
 
    var subscribtion = observable2.subscribe((res) => { ; console.log(res) })
    setTimeout(() => subscribtion.unsubscribe(),2000)
    
  }
  //endregion 4


  ngOnInit(): void {
    fromEvent(document, "click").pipe(scan((click) => click + 1, 0))
      .subscribe(res => { console.log(`document are clicked ${res}`) })
  }

}
