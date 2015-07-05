"use strict";

import {Directive} from 'angular2/angular2';

@Directive({
    selector: '[action]',
    host: {
        '@action': 'onAction()'
    }
})
export class ActionDirective {
    onAction() {
        console.log('action happened D:');
    }
}