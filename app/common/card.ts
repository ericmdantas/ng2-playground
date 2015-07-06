import {Component, View, NgFor} from 'angular2/angular2';
import {Stuff} from '../app/components/stuff_type';

@Component({
    selector: 'card',
    properties: ['stuffList: sl']
})
@View({
    template: `
    <div class="card"
         *ng-for="#stuff of sl"
         (click)="remove(stuff.createdAt)">
        <p>{{stuff.info}}</p>
        <p class="created-at">{{stuff.createdAt}}</p>
    </div>
    `,
    directives: [NgFor]
})

export class Card {
    sl: List<Object>;

    constructor() {
        console.log(this.sl);
    }
}