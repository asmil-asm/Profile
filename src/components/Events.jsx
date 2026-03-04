import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../Transilation'
const Events = () => {
    const {i18n}=useTranslation();
     let [mood,setMood]=useState()
const handelMood=()=>{
setMood(!mood)
}
const handelLanguage=(e)=>{
  const language=e.target.value;
  i18n.changeLanguage(language)
    document.body.dir =language ==='ar'?'rtl':'ltr'

}
  useEffect(() => {
    
    document.body.className = mood ? "bg-[#999]" : "bg-[#333]";
  }, [mood]);
  return (
    <>
    <div className='flex justify-between'>
    <div className={`icons ${mood?'bg-[#222831] text-white':'bg-[#999] text-[#333]'}`} onClick={handelMood}>
{mood?<IoIosSunny/>:<IoIosMoon/>}
</div>
<div className='language'>
<select className={`${mood?'text-[#333] ':'text-white bg-[#333]'}`} onChange={handelLanguage} defaultValue={i18n.language}>
<option value="en">English</option>
<option value="ar">العربية</option>
<option value="de">German</option>
<option value="es">Spanish</option>
<option value="it">Italian</option>
          </select>
        </div>
      </div>
      </>
  )
}

export default Events