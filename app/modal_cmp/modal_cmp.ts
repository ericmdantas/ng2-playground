import {
  Component,
  forwardRef,
  EventEmitter,
  Output,
  OnInit
} from 'angular2/angular2';

@Component({
  selector: 'modal-opener-cmp',
  template: `
    <p>modal-cmp</p>

    <button type="button"
            (click)="openModal()">open modal</button>
  `
})
class ModalOpenerCmp implements OnInit {
  @Output() modalOpened: EventEmitter = new EventEmitter();

  onInit() {
    console.log('modal-opener-cmp')
  }

  openModal() {
    this.modalOpened.next(null);
  }
}

@Component({
  selector: 'modal-cmp',
  template: `
    <div [hidden]="invisible">
      <p>modal title</p>
      <p>modal-body</p>
      <button type="button" (click)="closeModal()">x</button>
    </div>
  `,
  styles: [`
    div {
      position: fixed;
      width: 300px;
      height: 300px;
      box-shadow: 1px 1px 1px #777;
      top: 10px;
      left: 40%;
      background-color: #fff;
      padding: 50px 25px;
    }
  `]
})
class ModalCmp implements OnInit {
  invisible: boolean = true;

  onInit() {
    console.log('modal-cmp init');
  }

  onModalOpened(ev) {
    this.invisible = false;
  }

  closeModal() {
    this.invisible = true;
  }
}

@Component({
  selector: 'modal-wrapper-cmp',
  template: `
    <modal-opener-cmp (modal-opened)="modal.onModalOpened($event)"></modal-opener-cmp>
    <modal-cmp #modal></modal-cmp>
  `,
  directives: [ModalCmp, ModalOpenerCmp]
})
export class ModalWrapperCmp implements OnInit {
  onInit() {
    console.log('modal-wrapper-cmp init');
  }
}
