import express from 'express'
import { getTickets, createTicket, getTicket, deleteTicket, updateTicket} from '../controllers/ticketController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router({mergeParams: true})

//Re-route into note router
import noteRouter from './noteRoutes.js'


//get tickets && create a ticket
router.route('/').get(protect,getTickets).post(protect,createTicket)

router.route('/:id')
.get(protect, getTicket)
.delete(protect, deleteTicket)
.put(protect,updateTicket)


router.use('/:ticketId/notes', noteRouter)

export default router 