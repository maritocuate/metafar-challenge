import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock/:id" element={<Details />} />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={7000}
        theme="colored"
      />
    </BrowserRouter>
  )
}

export default App
