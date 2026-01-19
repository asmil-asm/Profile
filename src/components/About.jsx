import image1 from '../assets/About/Group 62.png'
import image2 from '../assets/About/Ellipse 3.png'
import image3 from '../assets/About/Vector 141.png'
import image4 from '../assets/About/lightbulb.png'
import image5 from '../assets/About/Vector 186.png'

const About = () => {
  return (
    <div className='about'>
       
    <div className="text">
         <img className='sing' src={image3} alt="not found" />
        <img className='lamb' src={image4} alt='not found' />
            <h2>About <span>me</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....<span> Read more</span></p>
            <img className='pointerTop' src={image5} alt="not found" />

    </div>
    <div className="image">
        <img src={image1} alt="not found" />
        <img src={image2} alt="not found" />
    </div>

    </div>
  )
}

export default About