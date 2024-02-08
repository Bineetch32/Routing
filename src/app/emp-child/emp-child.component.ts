import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-child',
  templateUrl: './emp-child.component.html',
  styleUrls: ['./emp-child.component.css']
})
export class EmpChildComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
emppchild2()
{
  this.router.navigate(["employee","empchild","empchild2"])
}
}
