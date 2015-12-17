import {
  Component
} from 'angular2/core';

@Component({
  selector: 'app-cmp',
  template: `
    <h1>{{name}}</h1>
  `
})
export class AppCmp {
  name: string = 'app';
}
