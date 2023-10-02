import { Router } from 'express';
import chatMessages from '../../db/chatMessages-db.js';
import { getUnreadMessages } from '../../controllers/getUnreadMessages.js';

const messagesRouter = new Router();

messagesRouter.get('/unread', async (req, res) => {
    const response = getUnreadMessages(chatMessages);
    res.json(response);
})

messagesRouter.post('/add', async (req, res) => {
    const { message } = req.body;
    chatMessages.add(message);

    res.json({ success: true, serverStatus: 'messages added'});
})


export default messagesRouter;