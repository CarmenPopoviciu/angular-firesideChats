import {Component, Template, If} from 'angular2/angular2';

const TWITTER_URL: string = 'https://twitter.com/';

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

    getLinkToTwitterProfile() {
        return TWITTER_URL.concat(this.item.twitterHandle);
    }
}
