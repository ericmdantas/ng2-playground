import {Component, View, NgFor} from 'angular2/angular2';
import {Stuff} from '../app/components/stuff_type';
import {Inject} from 'angular2/di';
import {YouCanDragThis} from './you_can_drag_this';

@Component({
    selector: 'card',
    properties: ['stuffList']
})
@View({
    template: `
    <div class="card"
         *ng-for="#stuff of stuffList"
         you-can-drag-this>

             <span class="close"
                   (click)="remove(stuff.createdAt)">x</span>
            <p>{{stuff.info}}</p>
            <p class="created-at">{{stuff.createdAt}}</p>
    </div>
    `,
    directives: [NgFor, YouCanDragThis]
})

export class Card {
    stuffList: List<Object>;
}