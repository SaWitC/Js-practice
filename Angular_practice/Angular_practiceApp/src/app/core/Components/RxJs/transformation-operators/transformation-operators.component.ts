import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, observable, of, map, from, mapTo, pluck, scan, expand, mergeMap, interval, buffer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.css']
})
export class TransformationOperatorsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  @Output() onMsgClicked = new EventEmitter<any>();

  ngOnInit(): void {

  }

  rxMap1() {

    this.onMsgClicked.emit("of(1, 2, 3, 4, 5).pipe(map((x) => x * 2))");
    const observ$ = of(1, 2, 3, 4, 5).pipe(map((x) => x * 2)).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxMap2() {
    this.onMsgClicked.emit(' from(["hELlo", "wOrLd", "MyWoRld"]).pipe(map((x: string) => x.toLowerCase()))');

    const observ$ = from(["hELlo", "wOrLd", "MyWoRld"]).pipe(map((x: string) => x.toLowerCase())).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxMapTo1() {
    this.onMsgClicked.emit('from(["hELlo", "wOrLd", "MyWoRld"]).pipe(mapTo("new value"))');

    const observ$ = from(["hELlo", "wOrLd", "MyWoRld"]).pipe(mapTo("new value")).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxPluck() {
    this.onMsgClicked.emit('from(["hELlo", "world", "MyWoRld"]).pipe(pluck("world","new world"))');

    const observ$ = from(["hELlo", "world", "MyWoRld"]).pipe(pluck("world", "new world")).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxScan() {
    this.onMsgClicked.emit('from([1, 2, 3, 4, 5, 6]).pipe(scan((total, i) => total+=i))');

    const observ$ = from([1, 2, 3, 4, 5, 6]).pipe(scan((total, i) => total += i)).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  ClickEvent$ = fromEvent(document, "click");
  rxBuffer() {
    const buffered = interval(1000).pipe(buffer(this.ClickEvent$)).subscribe(
      res => {
        if (res)
          this.toastr.info("observer got value " + res, "info")
      },
      err => this.toastr.error(err),
      () => {this.toastr.success("complete");}
    );
    setTimeout(() => {
      buffered.unsubscribe()
      this.toastr.success("end");
    },10000)
  }
}

  


