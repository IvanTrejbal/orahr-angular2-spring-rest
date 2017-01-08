import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { EmployeeBase } from './employee-base'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpBaseService {

    private empurl = "http://localhost:8080/api/employees?size=20&projection=empbase";

    constructor(private http: Http) { }


    private sample: EmployeeBase[] =
    [
        {
            employeeId: 15,
            firstName: 'John',
            lastName: 'Nobody',
            email: 'nobody'
        }
    ];


    getSomeEmployees(): Promise<EmployeeBase []> {
//      return Promise.resolve( this.sample ) ;

        return this.http.get(this.empurl)
            .toPromise()
            .then(rsp => this.parseResponse(rsp))
            .catch(this.handleError);
    }
    
    private parseResponse( r: Response ) : Promise<EmployeeBase []> {
        console.debug(r.json()._embedded.employees )
        
      return r.json()._embedded.employees as  Promise<EmployeeBase []> ;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Chybička .. ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
