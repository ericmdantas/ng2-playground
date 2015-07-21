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

    remove(id:number, productList: List<ProductType>):Rx.Observable {
        productList
            .forEach((p, i) => {
               if (p.id === id) {
                   return productList.splice(i, 1);
               }
            });

        return Rx.Observable.create(o => {
           o.onNext(productList);
           o.onCompleted();
        });
    }
}