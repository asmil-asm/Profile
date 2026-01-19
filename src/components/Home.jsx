import { FiDownload } from "react-icons/fi";
import image1 from '../assets/Home/Group 2346.png'
import image2 from '../assets/Home/Vector 187.png'
import image3 from '../assets/Home/Frame 7.png'
const Home = () => {
  return (
    <div className="home">
    <header>
        <h1>SaulDesign</h1>
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Contact</li>
        </ul>
    </header>
    <section>
      <div className="text">
        <img className="pointer" src={image2} alt="not found" />

<h2>CREATIVE UI <span>DESIGNER</span></h2>
<div className="btns">
  <button>Hire me</button>
  <button>Download cv <FiDownload/></button>
</div>
<img className="pointerDown" src={image3} alt="not found"/>
</div>
      
     <div className='image'>
<img src={image1} alt="not found" />
     </div>

    </section>
    </div>
  )
}

export default Home