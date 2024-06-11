import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
messages:string[]=[];
  constructor() { }
  log(messages:string){
    this.messages.push(messages);
  }
  clear(){
    this.messages=[];
  }
}