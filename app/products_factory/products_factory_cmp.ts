/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {ProductType} from '../products/product_type';

@Component({
    selector: 'products-factory',
    viewInjector: [FormBuilder, EventEmitter],
    events: ['productAdded']
})
@View({
    templateUrl: 'app/products_factory/products_factory.html',
    styleUrls: ['app/products_factory/products_factory.css'],
    directives: [formDirectives]
})

export class ProductFactoryCmp {
    factoryForm: ControlGroup;
    productAdded: EventEmitter;

    constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(EventEmitter) ee: EventEmitter) {
        this.productAdded = ee;

        this.factoryForm = fb.group({
            "name": ["a", Validators.required],
            "price": ["1", Validators.required],
            "description": ["a"]
        });
    }

    add(name: string, price: string, description?: string):void {
        this.productAdded.next({name: name, price: price, description: description});
    }
}