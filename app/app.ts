/// <reference path="../typings/tsd.d.ts" />

import {Component, View, Directive, ElementRef, EventEmitter, LifecycleEvent} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Xtorage} from 'app/utils/xtorage';

@Directive({
    selector: '[checker]',
    host: {
        '(even)': 'onEven()',
        '(odd)': 'onOdd()',
        '(^click)': 'wut()'
    },
    hostInjector: [LifecycleEvent.onInit]
})

class CheckerDirective {
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        this.el = el;
    }

    onEven() {
        console.log('even something')
    }

    onOdd() {
        console.log('odd something')
    }

    wut() {
        console.log('wut');
    }

    onInit() {
        console.log('directive init')
    }
}

@Component({
    selector: 'app',
    events: ['even', 'odd']
})
@View({
    template: `
    <div checker>
        <h1>app</h1>
        <button type="button"
                (click)="something()">smh</button>

        <p [inner-text]="counter"
           [class.something-even]="isEven()"
           [class.something-odd]="isOdd()"></p>

        <strong id="new"></strong>
    </div>
    `,
    styles: [`
        .something-even {
            color: red
        }

        .something-odd {
            color: blue;
        }
    `],
    directives: [CheckerDirective]
})
export class AppCmp {
    counter: number = 0;
    storage: Xtorage = new Xtorage();
    even: EventEmitter = new EventEmitter();
    odd: EventEmitter = new EventEmitter();

    constructor() {
    }

    isEven() {
        if (this.counter % 2 !== 0) {
            this.even.next({});
            return true;
        }

        return false;
    }

    isOdd() {
        if (this.counter % 2 === 0) {
            this.odd.next({});
            return true;
        }

        return false;
    }

    something() {
        this.counter++;

        this.storage.save('k', this.counter);
    }

    onInit() {
        console.log(this.storage);
    }
}
