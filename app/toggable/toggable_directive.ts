import {Directive, ElementRef, OnInit, Inject} from 'angular2/angular2';

@Directive({
  selector: '[toggable]',
  host: {
    '(click)': 'clickHandler()',
    'class': 'toggle-hidden'
  }
})
export class ToggableDirective implements OnInit {
    constructor(@Inject(ElementRef) private _el: ElementRef) {

    }

    onInit() {
      this._el.nativeElement.parentNode.getElementsByClassName('toggle-container')[0].style.display = 'none';
    }

    clickHandler() {
      let _display = this._el.nativeElement.parentNode.getElementsByClassName('toggle-container')[0].style.display;
      this._el.nativeElement.parentNode.getElementsByClassName('toggle-container')[0].style.display = _display === "none" ? 'block' : 'none';
    }
}
