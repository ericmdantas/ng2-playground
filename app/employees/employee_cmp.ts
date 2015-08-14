/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';
import {EmployeeModel} from 'app/employees/employee_model.js';

@Component({
  selector: 'employee',
  viewBindings: [EmployeeModel],
  lifecycle: [LifecycleEvent.onInit]
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

  onInit() {
    console.log('employee init')
  }
}
