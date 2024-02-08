import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpChildComponent } from './emp-child/emp-child.component';
import { DeptChildComponent } from './dept-child/dept-child.component';
import { EmpChild2Component } from './emp-child2/emp-child2.component';

const routes: Routes = [
  
 {
  path:"employee",component:EmployeeComponent,
  children:[
    {
      path: "empchild",component: EmpChildComponent,
      children:[
        {
          path: "empchild2",component: EmpChild2Component
          
        }  
      
  ]
}
  ]
}, 

  {
  path:"department",component:DepartmentComponent,
  children:[
    {
      path: "deptchild",component: DeptChildComponent
    }
  ]
},
  {
    path: '**', component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
