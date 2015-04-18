// angular-related imports
import {bootstrap, Component, View, For} from 'angular2/angular2';
import {ChatterCard} from 'chatter-card';
import {DataService} from 'DataService';

@Component({
    selector: 'fireside-chats-app',
    injectables: [DataService]
})
@View ({
    templateUrl: 'app.html',
    directives: [ChatterCard, For]
})
export class FiresideChatsApp {
    constructor(dataService: DataService) {
      this.name = 'Fireside Chats';

      dataService.getOrganisers().then((organisers) => {
        this.items = organisers;
      });
    }
}

// bootstrap the app
bootstrap(FiresideChatsApp);
