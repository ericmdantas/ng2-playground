/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter, bootstrap} from 'angular2/angular2';
import {NgFor, NgIf} from 'angular2/directives';
import {Inject} from 'angular2/di';
import {ProductType} from './product_type';
import {ProductFactoryCmp} from '../products_factory/products_factory_cmp';
import {ProductService} from './product_service';
import {MessageBus} from '../message_bus/message_bus';
import {IMessageBus} from '../message_bus/message_bus';

@Component({
    selector: 'product',
    viewInjector: [ProductService, EventEmitter]
})
@View({
    templateUrl: 'app/products/product.html',
    styleUrls: ['app/products/product.css'],
    directives: [ProductFactoryCmp, NgFor, NgIf]
})

export class ProductCmp {
    mb: IMessageBus;
    product: ProductType;
    productList: List<ProductType> = [];
    productService: ProductService;

    constructor(@Inject(ProductService) ps: ProductService) {
        this.productService = ps;
        this.mb = MessageBus;
    }

    productAddedSomewhere(product: ProductType):void {
        this
            .productService
            .add(product)
            .subscribe(p => {
               this.productList.push(p);
            });
    }

    addToCartHandler(product: ProductType) {
        this.mb.dispatch("cart:add", product);
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