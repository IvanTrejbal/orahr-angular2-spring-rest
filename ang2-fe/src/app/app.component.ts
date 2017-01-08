import { Component } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Human Resources ';
  
  constructor(private restangular: Restangular) {
  }
  
   
  
}
