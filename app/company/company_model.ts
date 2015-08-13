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

  set employees(es: EmployeeModel[]) {
    this._employees = es;
  }

  get employees():EmployeeModel[] {
    return this._employees;
  }

  addEmployee(employee: EmployeeModel):void {
    this._employees.push(employee);
  }

  removeEmployee(employee: EmployeeModel) {
    this._employees.splice(this._employees.indexOf(employee));
  }
}
