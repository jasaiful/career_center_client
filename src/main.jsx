import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import MainRoute from './router/MainRoute'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer />
      <RouterProvider router={MainRoute} />
    </AuthProvider>
  </React.StrictMode>
)
