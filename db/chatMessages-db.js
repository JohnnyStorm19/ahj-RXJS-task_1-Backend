import { v4 } from 'uuid';

const chatMessages = {
    data: [
        {
            id: "<uuid>",
            from: "anya@ivanova",
            subject: "Hello from Anya",
            body: "Long message body here" ,
            received: 1553108200,
            isUnread: true
          },
          {
            id: "<uuid>",
            from: "alex@petrov",
            subject: "Hello from Alex Petrov!",
            body: "Long message body here",
            received: 1653107200,
            isUnread: true
          }
    ],
    unreadMessages: true,

    add(message) {
        this.unreadMessages = true;
        
        message.id = v4();
        message.isUnread = true;
        this.data.push(message);
    }
}

export default chatMessages;