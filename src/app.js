// angular-related imports
import {bootstrap, Component, View} from 'angular2/angular2';
import {ChatterCard} from 'chatter-card';

@Component({
    selector: 'fireside-chats-app'
})
@View ({
    templateUrl: 'app.html',
    directives: [ChatterCard]
})
export class FiresideChatsApp {
    constructor() {
      this.name = 'Fireside Chats';

      this.item = {
        name: "Celestino Bellone",
        avatar: "https://pbs.twimg.com/profile_images/525988644301983744/yb4ECkxG_400x400.jpeg",
        twitterHandle: "c_bellone",
        description: "Poor tennis player..."
      };
    }
}

// bootstrap the app
bootstrap(FiresideChatsApp);
