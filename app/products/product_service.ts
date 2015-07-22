/// <reference path="../../typings/tsd.d.ts" />

import {ProductType} from './product_type';

export class ProductService {
    add(product: ProductType):Rx.Observable {
        return Rx.Observable.create(o => {
            product.id = Date.now();
            o.onNext(product);
            o.onCompleted();
        });
    }

    remove(id:number):Rx.Observable {
        return Rx.Observable.create(o => {
           o.onNext(id);
           o.onCompleted();
        });
    }
}