import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'chatter-card',
    properties: {
        item: 'item'
    }
})
@View({
    templateUrl: 'chatter-card.html'
})
export class ChatterCard {

    constructor() {
        // hide details by default
        this.showDetails = false;
    }

    toggle() {
        this.showDetails = !this.showDetails;
    }
}
