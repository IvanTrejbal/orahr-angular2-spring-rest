import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeBase } from '../employee-base'
import { PageInfo } from '../page-info'
import { Restangular } from 'ng2-restangular'
import { Message, LazyLoadEvent, FilterMetadata } from 'primeng/primeng'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-emp-table',
    templateUrl: './emp-table.component.html',
    styleUrls: ['./emp-table.component.css']
})
export class EmpTableComponent implements OnInit {

    msgs: Message[];
    private employees : Restangular;
    page: PageInfo = { size: 0, totalElements: 0, totalPages: 0, number: 0 };
    public employeeList: EmployeeBase[];
    public selectedEmployee: EmployeeBase;


    constructor(public restangular: Restangular, private router: Router) {
        this.employees = restangular.all('employees');
    }


    loadEmployeeLazy(event: LazyLoadEvent): void {


        let sortstr = event.sortField + ',' + ((event.sortOrder == 1) ? 'asc' : 'desc');
        let options =
            {
                projection: 'empbase',
                size: event.rows,
                page: Math.floor(event.first / event.rows),
                sort: sortstr
            };
        //        let searchField: string;
        let chooseFunctionForLoad = (event: LazyLoadEvent):Observable<any> => {
            for (let srchFld in event.filters) {
                switch (srchFld) {
                    case "firstName":
                        options[srchFld] = event.filters[srchFld].value;
                        return this.employees.customGETLIST("search/searchByFirstNameStartsWith", options);
                    case "lastName":
                        options[srchFld] = event.filters[srchFld].value;
                        return this.employees.customGETLIST("search/searchByLastNameStartsWith", options);
                    default:
                        return this.employees.getList(options);
                }
            }
            return this.employees.getList(options);
        };

        let receiveData = (e) => {
            this.employeeList = e;
            this.page = e.page;
        };

        let errorReceivedF = (errorResponse) => {
            console.log("Error with status code", errorResponse.status);
        }
      
        chooseFunctionForLoad(event).subscribe(receiveData, errorReceivedF);
    }

    ngOnInit() {
        //        this.loadEmployees();
    }

    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Employee Selected', detail: event.data.firstName + ' ' + event.data.lastName });
    }

    onEditEmployee() {
        if (this.selectedEmployee)
            this.router.navigate(['/employee-form', this.selectedEmployee.employeeId]);

    }
    onAddNewEmployee() {
        this.router.navigate(['/employee-form']);

    }
}
