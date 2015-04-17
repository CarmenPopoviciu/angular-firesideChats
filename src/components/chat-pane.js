import {Component, View, For} from 'angular2/angular2';

@Component({
    selector: 'chat-pane',
    properties: {
        chatHistory: 'chat-history'
    }
})

@View({
    template: '<div>' +
                '<div *for="#chat of chatHistory">' +
                    '<div>' +
                        '<img class="chatter-avatar" [src]="chat.chatter.avatar">' +
                        '<span class="chat-time">{{getTime(chat)}} </span>'+
                    '</div>' +
                    '<span>{{chat.text}}</span>' +
                '</div>' +
            '</div>',
    directives: [For]
})

export class ChatPane {
    getTime(chat) {
        return chat.date.toLocaleTimeString();
    }
}
