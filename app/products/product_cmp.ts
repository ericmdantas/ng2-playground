/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {ProductType} from './product_type';

@Component({
    selector: 'product'
})
@View({
    templateUrl: 'app/products/product.html',
    styleUrls: ['app/products/product.css']
})

export class ProductCmp {
    product: ProductType;

    constructor() {
        console.log('product init');
    }
}