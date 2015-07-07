import {Component, View, Renderer, ElementRef} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';

@Component({
    selector: 'trash-can'
})
@View({
    template: `
        <div id="trash-can" (drop)="dropped($event)" (dragover)="dragginOver($event)"></div>
    `
})

export class TrashCan {
    el: ElementRef;
    renderer: Renderer;

    constructor(@Inject(ElementRef) el: ElementRef, @Inject(Renderer) re: Renderer) {
        this.renderer = re;
        this.el = el;
    }

    dragginOver(ev) {
        document.getElementById('trash-can').style.border = '3px dashed yellow';

        console.log('dragging over')

        ev.preventDefault();
    }

    dropped(ev) {
        var _data = ev.dataTransfer.getData("stuff");

        console.log(_data);
    }
}