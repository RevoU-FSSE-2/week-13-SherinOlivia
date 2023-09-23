import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CategoryList, CreateNew, Login, Register, UpdateCategory } from './pages'

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<CategoryList />} />
        <Route path='/add' element={<CreateNew />} />
        <Route path='/edit/:id' element={<UpdateCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

