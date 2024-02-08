import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-child',
  templateUrl: './dept-child.component.html',
  styleUrls: ['./dept-child.component.css']
})
export class DeptChildComponent implements OnInit {
products: any;

  constructor() { }

  ngOnInit(): void {
  }

}
