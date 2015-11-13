import {Component, View, Input, OnInit} from 'angular2/angular2';
import {ToggableDirective} from 'app/toggable/toggable_directive.js';

@Component({
  selector: 'container-cmp',
  inputs: ['t'],
  template: `
    <div>
      <div toggable>
        <h2>{{t}}</h2>
      </div>
      <div class="toggle-container">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
      h2 {
        padding-bottom: 10px;
        border-bottom: 1px solid steelblue;
        cursor: pointer;
        transition: all .3s;
        -webkit-user-select: none;
      }

      h2:active {
        color: #fff;
        background-color: steelblue;
      }
    `],
    directives: [ToggableDirective]
})
export class ContainerCmp implements OnInit {
  t: string;

  onInit() {
    console.log('container-cmp init');
  }
}
