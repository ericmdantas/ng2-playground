import {
  Component
} from 'angular2/core';

function dec() {
  return (target) => {
    target.prototype.info = function() {
      return 'hello :D';
    }
  }
}

@dec()
@Component({
  selector: 'custom-annotation-cmp',
  template: `
    <p>{{info()}}</p>
  `
})
export class CustomAnnotationCmp {

}
