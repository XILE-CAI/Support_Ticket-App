import express from 'express'
import { getTickets, createTicket, getTicket, deleteTicket, updateTicket} from '../controllers/ticketController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

//get tickets && create a ticket
router.route('/').get(protect,getTickets).post(protect,createTicket)

router.route('/:id')
.get(protect, getTicket)
.delete(protect, deleteTicket)
.put(protect,updateTicket)

export default router 