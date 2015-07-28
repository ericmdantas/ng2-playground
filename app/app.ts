/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ProductCmp} from './products/product_cmp';
import {CartCmp} from './cart/cart_cmp';
import {FooterCmp} from './footer/footer_cmp';
import {bind} from 'angular2/di';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {NativeShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy';

@Component({
    selector: 'app'
})
@View({
    template: `
        <cart></cart>
        <product (^click)="bubbledClick()" (^product-added)="bubbledProductAdded()"></product>
        <footer></footer>
    `
})

export class App {
    constructor() {
        console.log('App initialized');
    }

    bubbledClick() {
        console.log('click bubbled correcly!');
    }

    bubbledProductAdded() {
        console.log('product-added bubbled correcly - not working, doe');
    }
}

Promise.all([
    bootstrap(CartCmp, [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)]),
    bootstrap(ProductCmp, [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)]),
    bootstrap(FooterCmp, [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)])
]).catch(console.error);