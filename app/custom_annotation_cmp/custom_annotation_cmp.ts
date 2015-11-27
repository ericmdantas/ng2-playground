import {
  Component
} from 'angular2/angular2';

function dec() {
  return (target) => {
    target.prototype.info = function() {
      return 'hello :D';
    }
  }
}

@dec()
@Component({
  selector: 'custom-annoation-cmp',
  template: `
    <p>{{info()}}</p>
  `
})
export class CustomAnnoationCmp {

}
