import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import About from './components/About'
import Profile from './components/Profile'
import Header from './components/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>

        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
