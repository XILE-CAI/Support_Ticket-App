import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Header from './components/Header.jsx';
import NewTicket from './pages/NewTicket.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute.jsx';
import Tickets from './pages/Tickets.jsx';
import Ticket from './pages/Ticket.jsx';

function App() {
  return (<>
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />
          <Route path='/new-ticket' element={<PrivateRoute />} >    
            <Route path='/new-ticket' element={<NewTicket/>} />
          </Route>
          <Route path='/tickets' element={<PrivateRoute />} >    
            <Route path='/tickets' element={<Tickets/>} />
          </Route>
          <Route path='/ticket/:ticketId' element={<PrivateRoute />} >    
            <Route path='/ticket/:ticketId' element={<Ticket/>} />
          </Route>
        </Routes>  
      </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
