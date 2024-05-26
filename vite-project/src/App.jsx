import Home from "./Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Creat from "./Creat"
import EditeUser from "./EditeUser"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/creat" element={<Creat/>} ></Route>
      <Route path="/edit/:id" element={<EditeUser/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
