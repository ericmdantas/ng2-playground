/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ProductCmp} from './products/product_cmp';
import {CartCmp} from './cart/cart_cmp';

@Component({
    selector: 'app'
})
@View({
    template: `
        <cart></cart>
        <product></product>
    `
})

export class App {
    constructor() {
        console.log('App initialized');
    }
}

Promise.all([
    bootstrap(ProductCmp),
    bootstrap(CartCmp)
]).catch(console.error);