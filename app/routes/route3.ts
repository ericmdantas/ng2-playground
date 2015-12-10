import {
  Component,
  OnInit,
  OnDestroy
} from 'angular2/core';

@Component({
  selector: 'router3',
  template: `
    <h1>router 3</h1>
    <ol>
      <li *ngFor="#i of info;">{{i}}</li>
    </ol>
  `
})
export class Router3Cmp implements OnInit, OnDestroy {
  info: any[] = [];

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.info.push(i);
    }
  }

  ngOnDestroy() {
    console.log('destroying router3');
    console.log(this.info);

    this.info.length = 0;
  }
}
