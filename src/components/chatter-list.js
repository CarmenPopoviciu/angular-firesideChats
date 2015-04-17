import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'chatter-list',
    properties: {
        title: 'title'
    }
})

@View({
    template: `<div>
                <h3>{{getUpperCaseTitle()}}</h3>
                <content></content>
            </div>`
})

export class ChatterList {
    title: string;
    getUpperCaseTitle() {
        return this.title.toUpperCase();
    }
}