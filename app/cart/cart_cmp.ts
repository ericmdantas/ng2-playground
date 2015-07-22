/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';

@Component({
    selector: 'cart',
    events: ['addToCart'],
    viewInjector: [EventEmitter]
})
@View({
    templateUrl: 'app/cart/cart.html',
    styleUrls: ['app/cart/cart.css']
})

@Inject(EventEmitter)
export class CartCmp {
    addToCart: EventEmitter;
    itemsCount: number = 0;

    constructor(ee: EventEmitter) {
        console.log('cart init');

        this.addToCart = ee;

        this.addToCart.toRx().subscribe(r => {
            console.log(r);
        })
    }

    addItem() {
        this.itemsCount++;
    }
}