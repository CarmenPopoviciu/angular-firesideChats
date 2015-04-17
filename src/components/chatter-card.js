import {Component, Template, If} from 'angular2/angular2';

@Component({
    selector: 'chatter-card',
    bind: {
        item: 'item'
    }
})

@Template({
    url: 'components/chatter-card.html',
    directives: [If]
})

export class ChatterCard {
    showDetails: boolean;

    constructor() {
        // hide details by default
        this.showDetails = false;
    }

    toggle() {
        this.showDetails = !this.showDetails;
    }
}
