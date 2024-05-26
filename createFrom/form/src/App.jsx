import './App.css'
import Register from './Register'
import Home from './home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './update'
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/update' element={<Update/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
