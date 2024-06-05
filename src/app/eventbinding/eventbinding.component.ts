import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  label: string ="eventbinding";

  constructor() { }

  ngOnInit(): void {
  }
  button2Click(){
    this.label="check eventbinding";
  }
  button1Click(){
    this.label="eventbinding";
  }
  onChangeInput(){
    this.label="label changes"
  }
  onChangeLabelInput(event:any){
    this.label=event.target.value;
  }
}
