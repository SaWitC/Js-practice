import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SubscriptionData } from '../models/SubscriptionData.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsServiceService {

  // private addSubscriptionSubject$ = new Subject<SubscriptionData>();
  // private removeSubscriptionSubject$ = new Subject<SubscriptionData>();
  private getSubscriptionsSubject$ = new Subject<SubscriptionData[]>();

  private subscriptions:SubscriptionData[]=[];

  public getSubscriptionsObservble(){
    return this.getSubscriptionsSubject$.asObservable();
  }

  public addSubscription(sub:SubscriptionData){
    this.subscriptions.push(sub);
    this.getSubscriptionsSubject$.next(this.subscriptions)
  }

  public removeSubscription(sub:SubscriptionData){
    this.subscriptions =this.subscriptions.filter(x=>x!==sub)
    this.getSubscriptionsSubject$.next(this.subscriptions)
  }

  public removeSubscriptionByPage(page:string){
    this.subscriptions =this.subscriptions.filter(x=>x.page!==page)
    this.getSubscriptionsSubject$.next(this.subscriptions)
  }

  constructor() { }
}
