/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ProductCmp} from './products/product_cmp';
import {CartCmp} from './cart/cart_cmp';
import {FooterCmp} from './footer/footer_cmp';

@Component({
    selector: 'app'
})
@View({
    template: `
        <cart #cart></cart>
        <product (add-to-cart)="cart.addItem()"></product>
        <footer></footer>
    `
})

export class App {
    constructor() {
        console.log('App initialized');
    }
}

Promise.all([
    bootstrap(CartCmp),
    bootstrap(ProductCmp),
    bootstrap(FooterCmp)
]).catch(console.error);