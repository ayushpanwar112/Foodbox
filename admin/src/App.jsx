import React from 'react'
import Navbar from './components/navbar/Navbar'
import Siderbar from './components/sidebar/Siderbar'
import Add from './pages/Add/Add'
import { Route, Routes } from 'react-router-dom'
import List from './pages/Lists/List'
import Order from './pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
         <hr/>
      <div className="app-content flex">
        <Siderbar/>  
        <Routes>
          <Route path='/' element={<Add url={url}/>} />
          <Route path="List" element={<List url={url}/>}/>
          <Route path="order" element={<Order url={url}/>}/>
        </Routes>
      
      </div>
    </div>
  )
}

export default App
