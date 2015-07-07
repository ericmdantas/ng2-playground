import {Inject} from 'angular2/di';
import {Directive, ElementRef, Renderer} from 'angular2/angular2';

type DragDropStyle = {
    backgroundColor: string;
    color: string;
}

@Directive({
    selector: '[you-can-drag-this]'
})

export class YouCanDragThis {
    el: ElementRef;
    renderer: Renderer;
    dragStyle: DragDropStyle = {backgroundColor: 'red', color: '#fff'};
    dropStyle: DragDropStyle = {backgroundColor: 'transparent', color: '#666'};

    constructor(@Inject(ElementRef) el: ElementRef, @Inject(Renderer) re: Renderer) {
        this.el = el;
        this.renderer = re;

        let _nativeEl = this.el.nativeElement;

        this.renderer.setElementProperty(this.el, "draggable", true);

        _nativeEl.addEventListener('dragstart', (ev) => {
            _nativeEl.style.backgroundColor = this.dragStyle.backgroundColor;
            _nativeEl.style.color = this.dragStyle.color;

            ev.dataTransfer.setData("stuff", ev.target);

            console.log('dragging...')
        });

        _nativeEl.addEventListener('dragend', (ev) => {
            _nativeEl.style.backgroundColor = this.dropStyle.backgroundColor;
            _nativeEl.style.color = this.dropStyle.color;

            console.log('ended')
        });
    }
}