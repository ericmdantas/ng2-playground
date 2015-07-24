/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ProductCmp} from './products/product_cmp';
import {CartCmp} from './cart/cart_cmp';
import {FooterCmp} from './footer/footer_cmp';
import {MessageBus} from './message_bus/message_bus';
import {IMessageBus} from './message_bus/interfaces';
import {Inject} from 'angular2/di';

@Component({
    selector: 'app',
    viewInjector: [MessageBus]
})
@View({
    template: `
        <cart #cart [message-bus]="mb"></cart>
        <product (add-to-cart)="cart.addItem()" [message-bus]="mb"></product>
        <footer></footer>
    `
})

export class App {
    mb: IMessageBus;

    constructor(@Inject(MessageBus) mb: IMessageBus) {
        console.log('App initialized');

        this.mb = mb;
    }
}

Promise.all([
    bootstrap(CartCmp),
    bootstrap(ProductCmp),
    bootstrap(FooterCmp)
]).catch(console.error);