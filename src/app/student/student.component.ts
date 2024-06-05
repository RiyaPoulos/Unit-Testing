import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  num = 15;
  redColor = 'font-red';
  blueColor = 'font-blue';
  constructor() { }

  ngOnInit(): void {
  }

}
