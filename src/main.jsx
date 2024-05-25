import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Pages/Card/Card.jsx'
import Home from './Pages/Home/Home.jsx'
import Placeholder from './Pages/Placeholder/Placeholder.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import StorecontextProvider from './Contextapi/Contextapi.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/card',
        element: <Card/>
      },
      {
        path: '/order',
        element: <Placeholder/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <StorecontextProvider>
    <RouterProvider router={router} />
  </StorecontextProvider> 
)
