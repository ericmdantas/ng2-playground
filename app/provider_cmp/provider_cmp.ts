import {Component, provide} from 'angular2/angular2';

class PClazz1 {
  name: string = 'pclazz1';
}

class PClazz2 {
  name: string = 'pclazz_extendable_2';
}

class PClazz3 extends PClazz2 {

}

@Component({
  selector: 'provider-cmp',
  template: `
    <p>this was supposed to be clazz1</p>
    <p>but it is: {{pclazz.name}}</p>
  `,
  providers: [provide(PClazz1, {useClass: PClazz3})]
})
export class ProviderCmp {
  constructor(public pclazz: PClazz1) {

  }
}
