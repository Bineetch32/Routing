import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
emppchild()
{
  this.router.navigate(["employee","empchild"])
}
}
