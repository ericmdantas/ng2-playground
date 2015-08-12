import {EmployeeModel} from 'app/employees/employee_model';

export class CompanyModel {
  _name: string;
  _employees: EmployeeModel[] = [];

  constructor() {
      this.name = 'C';
  }

  set name(s:string) {
    this._name = s;
  }

  get name() {
    return this._name;
  }
}
