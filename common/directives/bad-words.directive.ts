/// <reference path="../../typings/tsd.d.ts" />

import {Directive, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[bad]',
    events: ['badWord'],
    hostInjector: [EventEmitter],
    hostListeners: {
        input: 'badWordFound($event)'
    }
})
export class Bad {
    badWord: EventEmitter;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.badWord = ee;
    }

    badWordFound(ev: Event):void {
        const _val = ev.target.value;
        let _msg = 'u cool';

        if (_val.indexOf('shiiiet') > -1)
        {
            _msg = `u wot m8 - dont u ${_val} me, bruh`;
        }

        this.badWord.next({msg: _msg});
    }
}