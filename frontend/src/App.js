import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Header from './components/Header.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (<>
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />  
        </Routes>  
      </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
