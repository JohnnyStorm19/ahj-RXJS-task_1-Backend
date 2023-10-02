import express from 'express';
import cors from 'cors';
import messagesRouter from './routes/messages/messages-routers.js';

const app = express();
const port = process.env.PORT || 7070;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/messages', messagesRouter);

// тест для render.com
app.get('/test', (req, res) => {
  res.send(`Hello world from server on ${port}`)
})

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})


// server.on('close', () => {

// })

