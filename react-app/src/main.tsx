import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// "npm run dev" to run
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> {/* Built-in component in react that doesn't have a visual representation. Its purpose is to identify potential problems */}
    <App />
  </React.StrictMode>,
)
