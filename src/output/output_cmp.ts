import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from 'angular2/core';

@Component({
  selector: 'output-cmp',
  template: '<small>output-cmp</small>'
})
export class OutputCmp implements OnInit {
  @Output('out')
  out: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    setInterval(() => {
      this.out.next(~~(Math.random() * 10));
    }, 1000)
  }
}
