/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Component({
    selector: 'remover',
    events: ['taskDeletedByTheRemover']
})
@View({
    template: `
        <span class="the_remover" (click)="removed()">x</span>
    `,
    styleUrls: ['app/kanban/common/the_remover.css']
})

export class TheRemover {
    taskRemovedByTheRemover: EventEmitter;

    @Inject(EventEmitter)
    constructor(ee: EventEmitter) {
        this.taskRemovedByTheRemover = ee;
    }

    removed():void {
        this.taskRemovedByTheRemover.next({});
    }
}