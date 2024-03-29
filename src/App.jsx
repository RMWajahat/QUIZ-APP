import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import SignUp from './pages/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/quiz' element={<Quiz/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
