/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ProductCmp} from './products/product_cmp';
import {ProductFactoryCmp} from './products_factory/products_factory_cmp';
import {CartCmp} from './cart/cart_cmp';

@Component({
    selector: 'app'
})
@View({
    template: `
        <cart></cart>
        <products-factory (product-added)="product.opa($event)"></products-factory>
        <product #product></product>
    `
})

export class App {
    constructor() {
        console.log('App initialized');
    }
}

Promise.all([
    bootstrap(ProductCmp),
    bootstrap(CartCmp),
    bootstrap(ProductFactoryCmp),
]).catch(console.error);