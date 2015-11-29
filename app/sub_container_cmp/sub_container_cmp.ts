import {
  Component
} from 'angular2/angular2';

@Component({
  selector: 'sub-container-cmp',
  template: `
    <div>
      <ng-content class="something"></ng-content>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid blue;
      padding: 5px;
      margin-bottom: 5px;
      height: auto;
      cursor: pointer;
    }
  `],
  host: {
    '(click)': 'toggle()'
  }
})
export class SubContainerCmp {
    toggle() {
      console.log('toggling');
    }
}
