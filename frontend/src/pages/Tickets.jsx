import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getTickets,reset } from '../features/tickets/ticketSlice.js'
import Spinner from '../components/Spinner.jsx'
import BackButton from '../components/BackButton.jsx'
import TicketItem from '../components/TicketItem.jsx';


const Tickets = () => {

    const {tickets} = useSelector((state) => state.tickets)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTickets())
    },[dispatch])

    if(!tickets){
        return <Spinner />
    }
    console.log(tickets)

    return (
    <>
        <BackButton url='/'/>
        <h1>Tickets</h1>
        <div className="tickets">
            <div className="ticket-headings">
                <div>Date</div>
                <div>Product</div>
                <div>Status</div>
                <div></div>
            </div>

            {/* BUG return component must use () not {} */}
            {tickets.map((ticket) => (
                <TicketItem key={ticket._id} ticket={ticket}/>
            ))}

        </div>
    </>
  )
}

export default Tickets