import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Loginpage from './components/Loginpage'
import Body from './components/Body'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Loginpage/>} ></Route>
            <Route path="/frontpage" element={<Body/>} ></Route>
        </Routes> 
    </BrowserRouter>
  )
}
