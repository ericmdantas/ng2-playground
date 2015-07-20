/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'products-factory'
})
@View({
    templateUrl: 'app/products_factory/products_factory.html',
    styleUrls: ['app/products_factory/products_factory.css']
})

export class ProductFactoryCmp {
    constructor() {
        console.log('Product factory init')
    }
}