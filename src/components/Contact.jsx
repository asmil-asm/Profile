import image1 from '../assets/contact/Group 2372.png'
import image2 from '../assets/contact/Vector 186.png'
import image3 from '../assets/contact/keyboard.png'
import image4 from '../assets/contact/mail.png'
import { FiSend } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
const Contact = () => {
    const {t}=useTranslation()
  return (
    <div className='contact'>
<div className="text">
    <h2>{t('Got a project in mind')}?</h2>
<div className='img' >
    <img src={image1} alt="not found" />
</div>
<img className='pointerDown' src={image2} alt="not found" />
</div>
<div className='data'>
    <img className='Keyboard' src={image3} alt="not found" />
    <form>

    <div>
<div>
    <label>{t('Your name')}</label>
    <br/>
    <input type="text" placeholder={t('Name')} />
</div>
<div>
      <label>{t('Your email')}</label>
      <br/>
    <input type="email" placeholder={t('Email')} />
</div>

    </div>
    <label>{t('Your Message')}</label>
    <br/>
    <textarea placeholder={t('Message')}/>
    <button>{t('Send Message')}<FiSend/></button>

</form>
<img className='message' src={image4} alt="not found" />
</div>
        </div>
  )
}

export default Contact