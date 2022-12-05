//allow not to repeat use try catch
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import Ticket from "../models/ticketModel.js"
import Note from "../models/noteModel.js"

//get notes GET /api/tickets/:ticketId/notes
export const getNotes= asyncHandler( async (req,res) => {
    //get user using the id in the jwt
    const user = await User.findById(req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    console.log(user)
    console.log(req.params)
 
    const ticket = await Ticket.findById(req.params.ticketId)
    console.log(ticket)
    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    //verify only user can access its ticket
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorized')
    }

    const notes = await Note.find({ticket: req.params.ticketId})

//     res.status(200).json(notes)
})

