import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoute from './router/MainRoute'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute} />
    </AuthProvider>
  </React.StrictMode>
)
