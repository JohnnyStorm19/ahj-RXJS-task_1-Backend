import { createResponse } from "./createResponse.js";

export function getUnreadMessages(chatMessages) {
    let unreadMessages = [];
    
    if (!chatMessages.unreadMessages) {
        return { success: false };
    }
    // получаем непрочитанные сообщения и сразу же меняем статус, что они прочитаны
    chatMessages.data.forEach(message => {
        if (message.isUnread) {
            unreadMessages.push(message);
            unreadMessages.isUnread = false;
        }
    })

    const unreadMessagesResponse = createResponse(unreadMessages); // создаем объект, который вернем на клиент
    chatMessages.unreadMessages = false; // устанавливаем флаг, что теперь нет непрочитанных сообщений

    return { success: true, messages: unreadMessagesResponse }; // отвечаем на клиент
}