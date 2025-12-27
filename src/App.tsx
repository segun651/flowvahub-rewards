import SignUp from './pages/SignUp'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './sharedLayout'
import { Rewards } from './pages/rewards'


function App() {


  return (
   
    <>
 <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<SignUp />} />

      
      <Route  element={<SharedLayout />} >
      <Route path="/rewards" element={<Rewards />} />
      
      </Route>




      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
