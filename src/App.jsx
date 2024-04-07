
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import UseEffect from './UseEffect'
// import Button from './Button'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/useeffect' element={<UseEffect />} />

      </Routes>
    
    </BrowserRouter>
  )
}
// Button.defaultProps = {
//     name : "Default"
// }


export default App
