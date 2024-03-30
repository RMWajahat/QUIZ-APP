import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Quiz from './pages/Quiz';
import AdminPanel from './pages/adminpanel';
import ErrorPage from './pages/ErrorPage';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<AdminPanel />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
