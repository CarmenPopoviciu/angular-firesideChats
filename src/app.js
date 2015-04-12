import {bootstrap, Component, Template, For} from 'angular2/angular2';
import {ChatterList} from 'components/chatter-list';
import {ChatterCard} from 'components/chatter-card';
import {DataService} from 'services/DataService';

@Component({
    selector: 'fireside-chats-app',
    services: [DataService]
})

@Template ({
    url: 'app.html',
    directives: [ChatterList, ChatterCard, For]
})

export class FiresideChatsApp {
    organisers: Array;
    speakers: Array;

    constructor(dataService: DataService) {
        dataService.getOrganisers().then((organisers) => {
            this.organisers = organisers;
        });
        dataService.getSpeakers().then((speakers) => {
            this.speakers = speakers;
        });
    }
}

bootstrap(FiresideChatsApp);
