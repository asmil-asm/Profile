import { FiHome } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const {t}=useTranslation()
  return (
   <footer>
    <ul>
    <li><FiHome/> {t('Home')}</li>
    <li><BsPerson/> {t('About me')}</li>
    <li><BsTelephone/>{t('Contact')}</li>
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
    <p>{t('textFooter')}</p>

   </footer>
  )
}

export default Footer