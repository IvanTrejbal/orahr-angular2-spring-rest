import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestangularModule, RestangularHttp, Restangular } from 'ng2-restangular';
import { DataTableModule, SharedModule, MessagesModule, GrowlModule, ButtonModule,
         InputTextModule, PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { EmpBaseService } from './emp-base.service'
import { RstangService } from './rstang.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component'

@NgModule({
    declarations: [
        AppComponent,
        EmpTableComponent,
        EmployeeFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        RestangularModule.forRoot((RestangularProvider) => {
            RestangularProvider.setBaseUrl('http://localhost:8080/api');
            RestangularProvider.addResponseInterceptor((data, operation, what, url, response) => {
                if(! data._embedded  )
                    return data;
                let entityarray :any;
                let d : string;
                for (d in data._embedded) {
                   entityarray = data._embedded[d] ;
                    if (entityarray instanceof Array) {
                        break;
                    }
                }
                entityarray.page = data['page'];
                return entityarray;
            });
            RestangularProvider.setRestangularFields({
                id: "id"
            });
        }),
        DataTableModule,
        MessagesModule,
        GrowlModule,
        ButtonModule,
        SharedModule,
        InputTextModule,
        PanelModule
    ],
    providers: [EmpBaseService, FormsModule, RstangService],
    bootstrap: [AppComponent]
})
export class AppModule { }
