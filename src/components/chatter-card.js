import {Component, View, If} from 'angular2/angular2';

@Component({
    selector: 'chatter-card',
    properties: {
        item: 'item'
    }
})

@View({
    templateUrl: 'components/chatter-card.html',
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
