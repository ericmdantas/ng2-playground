/// <reference path="../../typings/tsd.d.ts" />

import {Inject} from 'angular2/di';
import {ServiceA} from './service_a';

export class ServiceB {
    name: string = 'service_b';
    sa: ServiceA;

    constructor(@Inject(ServiceA) sa: ServiceA) {
        this.sa = sa;
    }
}