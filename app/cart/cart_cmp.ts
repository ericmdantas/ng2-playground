/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';

@Component({
    selector: 'cart'
})
@View({
    templateUrl: 'app/cart/cart.html',
    styleUrls: ['app/cart/cart.css']
})

export class CartCmp {
    itemsCount: number = 0;

    constructor() {
        console.log('cart init');
    }

    addItem() {
        this.itemsCount++;
    }
}