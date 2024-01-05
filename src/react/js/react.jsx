import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import ShoppingCartProvider from './components/ShoppingCartContext/ShoppingCartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShoppingCartProvider>
            <App />
        </ShoppingCartProvider>
    </React.StrictMode>,
)
