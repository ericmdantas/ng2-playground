import {Component, View, Renderer, ElementRef, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';

@Component({
    selector: 'trash-can',
    events: ['droppedLikeItsHot'],
    viewInjector: [EventEmitter]
})
@View({
    template: `
        <div id="trash-can" (drop)="dropped($event)" (dragover)="dragginOver($event)" (dragend)="dragginEnd()"></div>
    `
})

export class TrashCan {
    el: ElementRef;
    renderer: Renderer;
    droppedLikeItsHot: EventEmitter;

    constructor(@Inject(ElementRef) el: ElementRef, @Inject(Renderer) re: Renderer, @Inject(EventEmitter) ee: EventEmitter) {
        this.renderer = re;
        this.el = el;
        this.droppedLikeItsHot = ee;
    }

    dragginOver(ev) {
        document.getElementById('trash-can').style.border = '3px dashed yellow';

        console.log('dragging over');

        ev.preventDefault();
    }

    dropped(ev) {
        var _data = ev.dataTransfer.getData("stuff");

        document.getElementById('trash-can').style.border = '3px dashed gray';

        this.droppedLikeItsHot.next(_data);
    }
}