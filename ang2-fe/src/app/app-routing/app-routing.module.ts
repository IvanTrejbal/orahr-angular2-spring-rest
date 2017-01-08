import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './../app.component';
import { EmpTableComponent } from './../emp-table/emp-table.component';
import { EmployeeFormComponent } from './../employee-form/employee-form.component';

const routes: Routes = [
{path: 'employees', component: EmpTableComponent} , 
{path: 'employee-form/:id', component: EmployeeFormComponent},  
{path: 'employee-form', component: EmployeeFormComponent},
{path: '', redirectTo:'/employees', pathMatch : 'full' },  
//{path: , component: },  
//{path: , component: },  
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
