import {Component, View, Renderer} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';

@Component({
    selector: 'trash-can'
})
@View({
    template: `
        <div id="trash-can" (drop)="dropped($event)" (dragover)="allowDrop($event)">
        </div>
    `
})

export class TrashCan {
    renderer: Renderer;

    constructor(@Inject(Renderer) re: Renderer) {
        this.renderer = re;
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    dropped(ev) {
        var _data = ev.dataTransfer.getData("stuff");

        console.log(_data);
    }
}