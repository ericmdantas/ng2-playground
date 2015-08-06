/// <reference path="../../../../typings/tsd.d.ts" />

import {Directive, ElementRef} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {IFight} from 'app/world/being/being';

@Directive({
    selector: '[ded]',
    properties: ['p', 'm']
})

export class DedDirective {
    p: IFight;
    m: IFight;
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        this.el = el;
    }
}