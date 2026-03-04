import { FiDownload } from "react-icons/fi";
import image1 from '../assets/Home/Group 2346.png'
import image2 from '../assets/Home/Vector 187.png'
import image3 from '../assets/Home/Frame 7.png'
import { useTranslation } from "react-i18next";


const Home = () => {
const {t}=useTranslation()

  return (
    <>
    <div className="home">
    <header>
        <h1>{t('SaulDesign')}</h1>
        <ul>
            <li>{t('Home')}</li>
            <li>{t('About me')}</li>
            <li>{t('Contact')}</li>
        </ul>
       
    </header>
    <section>
      <div className="text">
        <img className="pointer" src={image2} alt="not found" />

<h2>{t('CREATIVE UI')} <span>{t('DESIGNER')}</span></h2>
<div className="btns">
  <button>{t('Hire me')}</button>
  <button>{t('Download cv')} <FiDownload/></button>
</div>
<img className="pointerDown" src={image3} alt="not found"/>
</div>
      
     <div className='image'>
<img src={image1} alt="not found" />
     </div>

    </section>
    </div>
    </>

  )
}

export default Home