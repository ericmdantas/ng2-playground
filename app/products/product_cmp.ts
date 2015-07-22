/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter, bootstrap} from 'angular2/angular2';
import {NgFor, NgIf} from 'angular2/directives';
import {Inject} from 'angular2/angular2';
import {ProductType} from './product_type';
import {ProductFactoryCmp} from '../products_factory/products_factory_cmp';
import {ProductService} from './product_service';

@Component({
    selector: 'product',
    events: ['addToCart'],
    viewInjector: [ProductService, EventEmitter]
})
@View({
    templateUrl: 'app/products/product.html',
    styleUrls: ['app/products/product.css'],
    directives: [ProductFactoryCmp, NgFor, NgIf]
})

@Inject(ProductService, EventEmitter)
export class ProductCmp {
    product: ProductType;
    productList: List<ProductType> = [];
    productService: ProductService;
    addToCart: EventEmitter;

    constructor(ps: ProductService, ee: EventEmitter) {
        this.productService = ps;
        this.addToCart = ee;
    }

    productAddedSomewhere(product: ProductType):void {
        this
            .productService
            .add(product)
            .subscribe(p => {
               this.productList.push(p);
            });
    }

    addToCart(product: ProductType) {
        this.addToCart.next(product);
    }

    removeFromList(id: number) {
        this
            .productService
            .remove(id)
            .subscribe(pl => {
                this.productList
                    .forEach((p, i) => {
                        if (p.id === id) {
                            return this.productList.splice(i, 1);
                        }
                    });
            });
    }
}

bootstrap(ProductFactoryCmp);