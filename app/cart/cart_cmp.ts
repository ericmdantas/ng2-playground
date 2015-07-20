/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'cart'
})
@View({
    templateUrl: 'app/cart/cart.html',
    styleUrls: ['app/cart/cart.css']
})

export class CartCmp {
    constructor() {
        console.log('cart init');
    }
}