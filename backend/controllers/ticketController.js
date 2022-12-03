//allow not to repeat use try catch
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import Ticket from "../models/ticketModel.js"


//get user all tickets /api/tickets
export const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({ user: req.user.id })
  
    res.status(200).json(tickets)
})

//create a ticket
export const createTicket = asyncHandler(async(req,res)=> {
    const {product, description} = req.body
    
    if(!product || !description){
        res.status(400)
        throw new Error('Please add a product and description')
    }

    //get user using the id in the jwt
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.create({
        product,
        description,
        user:req.user.id,
        status:'new'
    })

    //201 means created
    res.status(201).json(ticket)
})


//get a single ticket GET /api/tickets/:id
export const getTicket= asyncHandler( async (req,res) => {
    //get user using the id in the jwt
    const user = await User.findById(req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //find by ticket id not user id
    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    //verify only user ca access its ticket
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorized')
    }

    res.status(200).json(ticket)
})


//delete a ticket delete /api/tickets/:id
export const deleteTicket= asyncHandler( async (req,res) => {
    //get user using the id in the jwt
    const user = await User.findById(req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //find by ticket id not user id
    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    //verify only user ca access its ticket
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorized')
    }

    //delete ticket
    await ticket.remove()

    res.status(200).json({success:true})
})


//update ticket put /api/tickets/:id
export const updateTicket= asyncHandler( async (req,res) => {
    //get user using the id in the jwt
    const user = await User.findById(req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //find by ticket id not user id
    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    //verify only user can access its ticket
    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorized')
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {new :true})

    res.status(200).json(updatedTicket)
})
