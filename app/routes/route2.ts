import {
  Component,
  OnDestroy
} from 'angular2/angular2';

import {
  CanActivate
} from 'angular2/router';

@Component({
  selector: 'router2',
  template: `
    <h1>router 2</h1>
  `
})
@CanActivate(() => {
  return Promise.resolve('a');
})
export class Router2Cmp implements OnDestroy {
  ngOnDestroy() {
    console.log('destroying route2');
  }
}
