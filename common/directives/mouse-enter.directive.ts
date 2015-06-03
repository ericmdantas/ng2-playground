/// <reference path="../../typings/tsd.d.ts" />

import {ElementRef, Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
    selector: 'mouse-goes-here'
})
@View({
    template: `<span class="moar-info">*mouse over me and check the console</span>`
})
export class MouseEnter {
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        el.domElement.addEventListener('mouseenter', _ => console.log(`you hovered me: ${el.domElement.innerText} at ${new Date()}`));
        el.domElement.addEventListener('click', ev => console.log(`don't ${ev.type} me!`));
        el.domElement.addEventListener('dblclick', ev => console.log(`don't ${ev.type} me!`));
    }
}
