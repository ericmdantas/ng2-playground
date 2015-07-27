/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {IMessageBus} from '../message_bus/interfaces';
import {MessageBus} from '../message_bus/message_bus';
import {NgZone} from 'angular2/src/core/zone/ng_zone';

@Component({
    selector: 'cart'
})
@View({
    templateUrl: 'app/cart/cart.html',
    styleUrls: ['app/cart/cart.css']
})

export class CartCmp {
    itemsCount: number = 0;
    mb: IMessageBus;
    nz: NgZone;

    constructor(@Inject(NgZone) nz: NgZone) {
        console.log('cart init');

        this.mb = MessageBus;
        this.nz = nz;

        this.mb.listen("cart:add", this.addItem.bind(this));
    }

    addItem() {
        this.nz.run(_ => this.itemsCount++);
    }

    removeItem() {
        if (this.itemsCount)
            this.itemsCount--;
    }
}