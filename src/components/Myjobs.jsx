import image1 from '../assets/Projects/0af8e23cd8af9f2bc81da5a4047ecdc800007d18.png'
import image2 from '../assets/Projects/Group 33.png'
import image3 from '../assets/Projects/Group 1.png'

const Myjobs = () => {
    const Images=[image1,image2,image3]
  return (
    <div className='MyJobs'>
     <div className="works">
           <h2>My recent <span>works</span></h2>
        <ul>
            <li>All</li>
            <li>UI</li>
            <li>UX</li>
            <li>Web Design</li>
        </ul>

        <div className="projects">
            {Images.map((image,index)=>(
<div key={index} className="box">
<img src={image} alt='not found'/>
</div>
            ))}
        </div>
</div>
    </div>
  )
}

export default Myjobs