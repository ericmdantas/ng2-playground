/// <reference path="../../../../typings/tsd.d.ts" />

import {Directive, ElementRef} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {IFight} from 'app/world/being/being';
import {LifecycleEvent} from 'angular2/angular2';

@Directive({
    selector: '[ded]',
    properties: ['fighter: f'],
    lifecycle: [LifecycleEvent.onChange]
})

export class DedDirective {
    f: IFight;
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        this.el = el;
    }

    onChange() {
        console.log('well, well, well..')
    }
}