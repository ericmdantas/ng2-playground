/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Todo} from "components/todo/todo";

@Component({
  selector: 'root'
})
@View({
  templateUrl: "components/root/root.tpl.html",
  directives: [ Todo ]
})
export class Root {
  title:string;
  t: Todo;
  constructor() {
    this.title = "Todo";
  }
}


