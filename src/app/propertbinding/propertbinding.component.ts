import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertbinding',
  templateUrl: './propertbinding.component.html',
  styleUrls: ['./propertbinding.component.css']
})
export class PropertbindingComponent implements OnInit {
name="Property Binding";
num1=100;
num2=20;

type="number";
placeholder="givenumber";
isReadOnly: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
