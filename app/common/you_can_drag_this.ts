import {Inject} from 'angular2/di';
import {Directive, ElementRef, Renderer} from 'angular2/angular2';

type DragDropStyle = {
    backgroundColor: string;
    color: string;
    opacity: number;
}

@Directive({
    selector: '[you-can-drag-this]',
    properties: ['date']
})

export class YouCanDragThis {
    el: ElementRef;
    renderer: Renderer;
    dragStyle: DragDropStyle = {backgroundColor: 'red', color: '#fff', opacity: 0};
    dropStyle: DragDropStyle = {backgroundColor: 'transparent', color: '#666', opacity: 1};
    date: any;

    constructor(@Inject(ElementRef) el: ElementRef, @Inject(Renderer) re: Renderer) {
        this.el = el;
        this.renderer = re;

        let _nativeEl = this.el.nativeElement;

        this.renderer.setElementProperty(this.el, "draggable", true);

        _nativeEl.addEventListener('dragstart', (ev) => {
            _nativeEl.style.backgroundColor = this.dragStyle.backgroundColor;
            _nativeEl.style.color = this.dragStyle.color;
            _nativeEl.style.opacity = this.dragStyle.opacity;

            ev.dataTransfer.setData("stuff", this.date);

            console.log('dragging...')
        });

        _nativeEl.addEventListener('dragend', (ev) => {
            _nativeEl.style.backgroundColor = this.dropStyle.backgroundColor;
            _nativeEl.style.color = this.dropStyle.color;
            _nativeEl.style.opacity = this.dropStyle.opacity;

            console.log('ended')
        });
    }
}