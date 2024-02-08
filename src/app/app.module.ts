import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpChildComponent } from './emp-child/emp-child.component';
import { DeptChildComponent } from './dept-child/dept-child.component';
import { EmpChild2Component } from './emp-child2/emp-child2.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    PageNotFoundComponent,
    EmpChildComponent,
    DeptChildComponent,
    EmpChild2Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [EmployeeComponent,DepartmentComponent,PageNotFoundComponent,EmpChildComponent,DeptChildComponent,EmpChild2Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
