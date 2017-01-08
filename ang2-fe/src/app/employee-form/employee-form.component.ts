import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Restangular } from 'ng2-restangular'
import { Employee } from '../entities/employee'

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
    employee: Employee;
    disabledOnChange: boolean;
    newEmployee: boolean = false ;
    employeeId: number ;
    departmentId: string;
    jobId:string;
    employeeList:string;
    manager:string;
     
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private restang: Restangular) { }

    ngOnInit() {
        if (!this.route.params) {
            this.employee = { firstName: "" };
            this.disabledOnChange = false;
            this.newEmployee = true ;
            return;
        }
        this.route.params
            .switchMap((params: Params) => {
                (this.employeeId = +params['id']);
                return this.restang.one('employees', this.employeeId).get();
            })
            .subscribe((e) => { this.employee = e; loadAssociated(); });
        this.disabledOnChange = true;
        let loadAssociated = () => {
            console.log(this.employee.lastName);
            let current = this.restang.one('employees', +this.employeeId);
            
            current.one('departmentId').get().subscribe((r) => this.departmentId = r.departmentName);
            current.one('jobId').get().subscribe((r) => this.jobId = r.jobTitle);
            current.one('managerId').get().subscribe((r) => this.manager = r.firstName+" "+r.lastName);
            current.one('employeeList').getList().subscribe((r) => this.employeeList = r.length + ' employees in the list');
            //            current.one('jobHistoryList').getList().subscribe((r) => this.employee.jobHistoryList = r.length + ' previous positions');
        }
    }

    onAddNewEmployee() {
        if (this.newEmployee) {
            this.restang.all('employees').post(this.employee);
        }
        else {
            this.restang.one('employees', +this.employeeId).patch(this.employee)
        }
    }

    onCancel() {
        this.router.navigate(['employees']);
    }
}
