export function createResponse(unreadMessages) {
    return {
        status: "ok",
        timestamp: Date.now(),
        messages: unreadMessages
    }
}
