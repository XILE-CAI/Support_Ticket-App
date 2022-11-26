import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Header from './components/Header.jsx';


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
    </>
  );
}

export default App;
