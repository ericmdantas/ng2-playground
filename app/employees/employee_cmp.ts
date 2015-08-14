/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent, NgFor} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {EmployeeModel} from 'app/employees/employee_model.js';

@Component({
  selector: 'employee',
  viewBindings: [EmployeeModel],
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/employees/employee.html',
  styleUrls: ['app/employees/employee.css'],
  directives: [NgFor]
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
