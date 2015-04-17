// angular-related imports
import {bootstrap, Component, View, For} from 'angular2/angular2';

// components
import {ChatterList} from 'chatter-list';
import {ChatterCard} from 'chatter-card';
import {FiresideChat} from 'fireside-chat';

// services
import {DataService} from 'DataService';


@Component({
    selector: 'fireside-chats-app',
    injectables: [DataService]
})

@View ({
    templateUrl: 'app.html',
    directives: [ChatterCard, FiresideChat, For]
})

export class FiresideChatsApp {
    organisers: Array;
    showChatRoom: boolean;

    constructor(dataService: DataService) {
        this.showChatRoom = false;
        dataService.getOrganisers().then((organisers) => {
            this.organisers = organisers;
        });
    }

    startChat() {
        this.showChatRoom = true;
    }

    endChat() {
        this.showChatRoom = false;
    }
}

// bootstrap the app
bootstrap(FiresideChatsApp);
