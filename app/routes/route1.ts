import {
  Component,
  OnDestroy
} from 'angular2/angular2';

@Component({
  selector: 'router1',
  template: `
    <h1>router 1</h1>
  `
})
export class Router1Cmp implements OnDestroy {
  ngOnDestroy() {
    console.log('destroying route1');
  }
}
