import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/products'  
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <ProductProvider>
    <App />
    </ProductProvider>
    </Router>
  </React.StrictMode>,
)
