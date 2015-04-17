// angular-related imports
import {Component, View} from 'angular2/angular2';

// components
import {ChatPane} from 'components/chat-pane';
import {ChatterList} from 'components/chatter-list';

// services
import {ChatService} from 'services/ChatService';


@Component ({
    selector: 'fireside-chat',
    properties: {
        chatters: 'chatters'
    },
    injectables: [ChatService]
})

@View({
    templateUrl: 'components/fireside-chat.html',
    directives: [ChatPane, ChatterList]
})

export class FiresideChat {
    chatHistory: Array;
    chatService: ChatService;

    constructor(chatService: ChatService) {
        this.chatService = chatService;
        this.chatHistory = chatService.getChatHistory();
    }

    sendChat(event, chat) {
        if(event.keyCode === 13) {
            this.chatService.pushChatMessage(chat.value);
            chat.value = '';
        }
    }
}