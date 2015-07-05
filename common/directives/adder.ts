"use strict";

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'adder'
})
@View({
    template: `
        <button type="button"
            logger
            (^click)="add(tmessage);"
            [disabled]="!todoForm.valid"
            nc (^next-color)="onNextColor($event)">+</button>
    `
})

export class Adder {
    todoForm: Object;

    constructor() {
        console.log(this.todoForm);
    }
}