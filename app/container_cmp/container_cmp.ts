import {
  Component
} from 'angular2/core';

@Component({
  selector: 'container-cmp',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid red;
        padding: 10px;
      }
    `
  ]
})
export class ContainerCmp {

}
