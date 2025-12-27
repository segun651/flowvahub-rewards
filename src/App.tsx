import SignUp from './pages/SignUp'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './sharedLayout'
import { Rewards } from './pages/rewards'
import { useState } from 'react'
import { createContext } from 'react'
import ProtectedRoute from './ProtectedRoute'
  export const SidebarContext = createContext<{
    isSmallSidebarOpen: boolean;
    setIsSmallSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  } | null>(null);


function App() {

  const[issmallAsidebarOpen,setIsSmallSidebarOpen]=useState(false);
  return (
    <>
    <SidebarContext.Provider value={{ isSmallSidebarOpen: issmallAsidebarOpen, setIsSmallSidebarOpen: setIsSmallSidebarOpen }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route element={<SharedLayout />}>
            <Route path="/rewards" element={ <ProtectedRoute>
              <Rewards /></ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    
 
    </SidebarContext.Provider>

    </>
  )
}

export default App
