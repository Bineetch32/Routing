import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
deptchild()
{
  this.router.navigate(["department","deptchild"])
}
}
