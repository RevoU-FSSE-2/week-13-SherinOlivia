import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateNew, Login, Register, UpdateCategory, CategoryList } from './pages'

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<CategoryList />} />
        <Route path='/add' element={<CreateNew />} />
        <Route path='/edit/:id' element={<UpdateCategory />} />
        {/* <Route path='/coba' element={<CategoryRetry />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

