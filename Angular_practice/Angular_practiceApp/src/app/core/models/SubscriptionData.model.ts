import { Subscription } from "rxjs";

export class SubscriptionData{
  page:string;
  label:string;
  subscription:Subscription;
  constructor(label:string,subscription:Subscription,page:string){
    this.label=label;
    this.subscription = subscription;
    this.page=page
  }
}
