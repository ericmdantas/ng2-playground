export class EmployeeModel {
  _name: string;
  _age: number;
  _salary: number;

  constructor() {
    this.name = 'eric';
    this.age = 18;
    this.salary = 1000;
  }

  set name(n:string) {
    this._name = n;
  }

  get name():string {
    return this._name;
  }

  set age(a:number) {
    this._age = a;
  }

  get age():number {
    return this._age;
  }

  set salary(s:number) {
    this._salary = s;
  }

  get salary() {
    return this._salary;
  }
}
