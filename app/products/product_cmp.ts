/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';
import {ProductType} from './product_type';

@Component({
    selector: 'product',
    events: ['productAdded'],
    viewInjector: [EventEmitter]
})
@View({
    templateUrl: 'app/products/product.html',
    styleUrls: ['app/products/product.css']
})

export class ProductCmp {
    productAdded: EventEmitter;
    product: ProductType;

    constructor(@Inject(EventEmitter) ee: EventEmitter) {
        this.productAdded = ee;
        this.productAdded.toRx().subscribe(s => {
            console.log(s)
        },
        e => {
            console.log(e)
        })
    }
}