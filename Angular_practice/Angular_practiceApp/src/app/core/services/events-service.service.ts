import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventData } from '../models/EventsModel';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private getSubscriptionsSubject$ = new Subject<EventData[]>();

  private events:EventData[]=[];

  public getEventsObservble(){
    return this.getSubscriptionsSubject$.asObservable();
  }

  public log(sub:EventData){
    this.events.push(sub);
    return this.getSubscriptionsSubject$.next(this.events);
  }
  constructor() { }
}
