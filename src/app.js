// angular-related imports
import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
    selector: 'fireside-chats-app',
})
@View ({
    template: '<h1>{{name}}</h1>',
})
export class FiresideChatsApp {
    constructor() {
      this.name = 'Fireside Chats';
    }
}

// bootstrap the app
bootstrap(FiresideChatsApp);
