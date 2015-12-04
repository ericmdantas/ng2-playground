import {
  Component,
  OnDestroy
} from 'angular2/angular2';

@Component({
  selector: 'router2',
  template: `
    <h1>router 2</h1>
  `
})
export class Router2Cmp implements OnDestroy {
  ngOnDestroy() {
    console.log('destroying route2');
  }
}
