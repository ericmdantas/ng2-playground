import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
  `
})
export class App {
  name: string = 'yo!';
}
