/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap, LifecycleEvent, NgFor, FormBuilder, ControlGroup, formDirectives, Validators} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {EmployeeModel} from 'app/employees/employee_model.js';
import {EmployeeService} from 'app/employees/employee_service.js';
import {FormToggleCmp} from 'app/common/../common/form_toggle_cmp.js';

@Component({
  selector: 'employee',
  viewBindings: [EmployeeModel, FormBuilder, EmployeeService],
  lifecycle: [LifecycleEvent.onInit],
})
@View({
  templateUrl: 'app/employees/employee.html',
  styleUrls: ['app/employees/employee.css'],
  directives: [NgFor, formDirectives]
})

export class EmployeeCmp {
  employee: EmployeeModel;
  employeeForm: ControlGroup;
  employeeService: EmployeeService;
  employeeList: EmployeeModel[] = [];

  constructor(@Inject(EmployeeModel) e: EmployeeModel, @Inject(FormBuilder) fb: FormBuilder, @Inject(EmployeeService) es: EmployeeService) {
    this.employee = e;
    this.employeeService = es;

    this.employeeForm = fb.group({
      "name": ["", Validators.required],
      "age": ["18", Validators.required],
      "salary": ["0", Validators.required]
    })
  }

  onInit() {
    console.log('employee init')
  }

  addEmployeeHandler(employee: EmployeeModel) {
    this.employeeService
        .add(employee)
        .subscribe(emp => {
          this.employeeList.push(emp);
        });
  }
}

bootstrap(FormToggleCmp);
