import { FiHome } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";



const Footer = () => {
  return (
   <footer>
    <ul>
    <li><FiHome/> Home</li>
    <li><BsPerson/> About me</li>
    <li><BsTelephone/> Contact</li>
    </ul>
    <div className="media">
    <div className="icons">
          <LuFacebook />
    </div>
    <div className="icons">
              <IoLogoInstagram />

    </div>
    <div className="icons">
              <CiTwitter />

    </div>
    <div className="icons">
              <AiOutlineYoutube/>

    </div>
    </div>
    <p>Terms of Service - Privacy Policy</p>

   </footer>
  )
}

export default Footer