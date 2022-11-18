import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, observable, of, map, from, mapTo, pluck } from 'rxjs';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.css']
})
export class TransformationOperatorsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  rxMap1() {
    const observ$ = of(1, 2, 3, 4, 5).pipe(map((x) => x * 2)).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxMap2() {
    const observ$ = from(["hELlo", "wOrLd", "MyWoRld"]).pipe(map((x: string) => x.toLowerCase())).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxMapTo1() {
    const observ$ = from(["hELlo", "wOrLd", "MyWoRld"]).pipe(mapTo("new value")).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

  rxPluck() {
    const observ$ = from(["hELlo", "world", "MyWoRld"]).pipe(pluck("world","new world")).subscribe(
      res => this.toastr.info("observer got value " + res, "info"),
      err => this.toastr.error(err),
      () => { this.toastr.success("complete"); }
    )
  }

}
