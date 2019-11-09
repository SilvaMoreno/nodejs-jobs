import 'dotenv/config'
import express from 'express'

import BullBoard from 'bull-board'
import Queue from './app/lib/Queue'

import UserController from './app/controllers/UserController'

const app = express()
BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())
app.post('/user', UserController.store)

app.use('/admin/queue', BullBoard.UI)

app.listen(3333, () => {
	console.log('Server is running on port 3333')
})
