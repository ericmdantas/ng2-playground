/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';
import {IMessageBus} from '../message_bus/interfaces';

@Component({
    selector: 'cart',
    properties: ['messageBus']
})
@View({
    templateUrl: 'app/cart/cart.html',
    styleUrls: ['app/cart/cart.css']
})

export class CartCmp {
    itemsCount: number = 0;
    mb: IMessageBus;

    constructor() {
        console.log('cart init');

        this.mb.listen('addProductToCart', this.addItem);
    }

    addItem() {
        this.itemsCount++;
    }
}