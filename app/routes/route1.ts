import {
  Component,
  OnDestroy
} from 'angular2/core';

import {
  CanActivate,
  CanDeactivate
} from 'angular2/router';

@Component({
  selector: 'router1',
  template: `
    <h1>router 1</h1>
  `
})
@CanActivate(() => {
  return true;
})
export class Router1Cmp implements OnDestroy, CanDeactivate {
  ngOnDestroy() {
    console.log('destroying route1');
  }

  routerOnActivate() {
    console.log('activating...');
  }

  routerCanDeactivate(n, p) {
    console.log('deactivating..');
    console.log(n, p);
  }
}
