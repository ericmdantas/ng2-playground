/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Xtorage} from 'app/utils/xtorage';

@Component({
    selector: 'app'
})
@View({
    template: `
        <h1>app</h1>
        <button type="button"
                (click)="something()">smh</button>

        <p [inner-text]="counter"
           [class.something-even]="isEven()"
           [class.something-odd]="isOdd()"></p>
    `,
    styles: [`
        .something-even {
            color: red
        }

        .something-odd {
            color: blue;
        }
    `]
})
export class AppCmp {
    counter: number = 0;
    storage: Xtorage = new Xtorage();

    constructor() {
    }

    isEven() {
        return this.counter % 2 !== 0;
    }

    isOdd() {
        return this.counter % 2 === 0;
    }

    something() {
        this.counter++;

        this.storage.save('k', this.counter);
    }

    onInit() {
        console.log(this.storage);
    }
}
