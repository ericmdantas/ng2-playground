import {Component, View, NgFor} from 'angular2/angular2';
import {Stuff} from '../app/components/stuff_type';
import {Inject} from 'angular2/di';

@Component({
    selector: 'card',
    properties: ['stuffList']
})
@View({
    template: `
    <div class="card"
         *ng-for="#stuff of stuffList"
         (click)="remove(stuff.createdAt)">
        <p>{{stuff.info}}</p>
        <p class="created-at">{{stuff.createdAt}}</p>
    </div>
    `,
    directives: [NgFor]
})

export class Card {
    stuffList: List<Object>;
}