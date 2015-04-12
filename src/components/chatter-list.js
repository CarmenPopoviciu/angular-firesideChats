import {Component, Template} from 'angular2/angular2';

@Component({
    selector: 'chatter-list',
    bind: {
        title: 'title'
    }
})

@Template({
    inline: `<div>
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