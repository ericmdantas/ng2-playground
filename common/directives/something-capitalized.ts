"use strict";

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'something-capitalized',
    properties: ['text | capitalize']
})
@View({
    template: `<small>{{text}}</small>`
})

export class SomethingCapitalized {
    text: string;

    constructor() {
    }
}
