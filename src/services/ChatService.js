export class ChatService {
    chat: Array = [];

    pushChatMessage(text) {
        // build up the message object
        var message = {};
        // [@Carmen]TODO we need a session service here
        message.chatter = {
            name: 'Carmen Popoviciu',
            twitterHandle: 'CarmenPopoviciu',
            avatar: 'https://pbs.twimg.com/profile_images/3465736275/e6c51a0587a7b57638dbbbda281fa90f_400x400.jpeg'
        };
        message.date = new Date();
        message.text = text;

        this.chat.push(message);
    }

    getChatHistory() {
        return this.chat;
    }
}
