/// <reference path="../../typings/tsd.d.ts" />

export class ServiceA {
    name: string = 'service_a';

    constructor(a:string) {
        console.log(a);
    }
}