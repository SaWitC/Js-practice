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
  public logSuccseed(message:string){
    this.events.push(new EventData("#3CB371",message,""));
    return this.getSubscriptionsSubject$.next(this.events);
  }
  public logError(message:string){
    this.events.push(new EventData("#FF4500",message,""));
    return this.getSubscriptionsSubject$.next(this.events);
  }
  public logWarning(message:string){
    this.events.push(new EventData("#FFA500",message,""));
    return this.getSubscriptionsSubject$.next(this.events);
  }
  public logInfo(message:string){
    this.events.push(new EventData("RoyalBlue",message,""));
    return this.getSubscriptionsSubject$.next(this.events);
  }
  public logUsubscribe(message:string){
    this.events.push(new EventData("RoyalBlue",message,""));
    return this.getSubscriptionsSubject$.next(this.events);
  }
  constructor() { }
}
