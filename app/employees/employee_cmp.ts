/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';
import {EmployeeModel} from 'app/employees/employee_model.js';

@Component({
  selector: 'employee',
  viewBindings: [EmployeeModel]
})
@View({
  templateUrl: 'app/employees/employee.html',
  styleUrls: ['app/employees/employee.css']
})

export class EmployeeCmp {
  employee: EmployeeModel;

  constructor(@Inject(EmployeeModel) e: EmployeeModel) {
    this.employee = e;
  }

  
}
