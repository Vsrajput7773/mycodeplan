import Home from "./component/Home"
import About from "./component/About"
import User from "./component/User"
import Nav from "./component/Nav"
import { Routes,Route,BrowserRouter } from "react-router-dom"
function App() {

  return (
 <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/user" element={<User/>}></Route>
    </Routes>
    </>
)
}

export default App
