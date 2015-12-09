import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: 'main-container',
  template: `
    <div class="main-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .main-container {
        border: 1px solid red;
        padding: 15px;
      }
    `
  ]
})
export class MainContainerCmp implements OnInit {
  ngOnInit() {
    console.log('main-container init');
  }
}
