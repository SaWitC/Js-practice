import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs/internal/observable/of';
import { concatAll, fromEvent, from, interval } from 'rxjs';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.css']
  
})
export class CreationOperatorsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  @Output()
  public codeString:string;

  rxOf() {
    this.toastr.clear();
    this.codeString = 'of("hello", "world", "hd").pipe(concatAll())';

    of("hello", "world", "hd")
      .pipe(concatAll())
      .subscribe(res => this.toastr.info(res), err => { this.toastr.error(err, "error") }, () => { this.toastr.success("complete") });
  }
  rxOf2() {

    of(1, 2, 3).subscribe(res => this.toastr.info(res.toString(), "Result"), null, () => this.toastr.success("complete"));

    this.codeString = '"of(1, 2, 3)"'
  }
  ///fromEvent
  public isCheckedFromEvent: boolean;
  fromEvent1 = fromEvent(document, "click").subscribe(res => { console.log(res); })
  rxFromEvent(event: any) {

    //const checkbox = document.getElementById("checkBox1");
    this.fromEvent1

  }

  rxFromEventUnsubscribe() {
    this.fromEvent1.unsubscribe();
  }

}
