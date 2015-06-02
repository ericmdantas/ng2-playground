/// <reference path="../../typings/angular2/angular2.d.ts" />

import {ElementRef, Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
    selector: 'mouse-goes-here'
})
@View({
    template: `<span class="moar-info">*mouse over me</span>`
})
export class MouseEnter {
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        el.domElement.addEventListener('mouseenter', _ => console.log(`hover em ${el.domElement.innerText}`));
    }
}
