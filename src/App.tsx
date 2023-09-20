import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from './containers'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

