import { Subscription } from "rxjs";

export class EventData{
  color:string;
  label:string;
  description:string;
  constructor(color:string,label:string,description:string){
    this.color = color;
    this.label = label;
    this.description = description
  }
}
