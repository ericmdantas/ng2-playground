/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Directive, ElementRef, LifecycleEvent, bootstrap} from 'angular2/angular2';

@Directive({
  selector: '[modal-opener]',
  host: {
    '(click)': 'clickHandler()'
  }
})

class ModalOpenerDirective {
  clickHandler() {
    console.log('opening modal...');
  }
}

@Component({
  selector: 'modal-maker'
})
@View({
  template: `
    <button type="button"
            modal-opener>button</button>
  `,
  directives: [ModalOpenerDirective]
})

class ModalMakerCmp {
  constructor() {
    console.log('modal-maker in');
  }
}

@Component({
  selector: 'modal'
})
@View({
  template: `
    <div id="modal"></div>
  `
})

class ModalCmp {
  constructor() {
    console.log('modal')
  }
}


@Component({
  selector: 'modal-wrapper'
})
@View({
  template: `
    <div>
      <modal></modal>
      <modal-maker></modal-maker>
    </div>
  `,
  directives: [ModalMakerCmp]
})

export class ModalWrapperCmp {
  constructor() {
    console.log('modal-wrapper')
  }
}

Promise.all([bootstrap(ModalCmp), bootstrap(ModalMakerCmp)])
       .then(() => console.log('modal ok'))
       .catch((error) => console.log(`modal error: ${error}`))
