import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CategoryList, CreateNew, Login, Register } from './pages'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CategoryList />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<CreateNew />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

