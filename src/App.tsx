import SignUp from './pages/SignUp'
import LoginIn from './pages/LoginIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
   
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
