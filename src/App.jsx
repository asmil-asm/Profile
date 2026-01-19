import './App.css'
import Home from "./components/Home"
import About from './components/About'
import Myjobs from './components/Myjobs'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <div className="main">
<Home/>
<About/>
<Myjobs/>
<Contact/>
<Footer/>
     
    </div>
  )
}

export default App
