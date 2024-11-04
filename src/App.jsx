import './App.css'
import Home from './components/Home'
import Join from './components/Join'
import Shop from './components/Shop'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/home' element = {<Home/>}/>
    <Route path='/join' element={<Join />}/>
    <Route path='/shop' element = {<Shop/>}/>
    <Route path='/about' element = {<About />}/>
    <Route path='/contact' element = {<Contact />}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}
export default App
