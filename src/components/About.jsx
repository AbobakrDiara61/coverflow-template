import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const About = ({obserArray}) => {
  return (
    <section id='about' className='section-container dark-radial' ref={(el) => obserArray[0] = el}>
      <div className="main-container">
        <div className="main-heading">
            <h2 className='text-gradient'>Discover 3D Coverflow</h2>
            <p>A revolutionary way to showcase your visual content with stunning 3D effects and seamless interactions</p>
        </div>
        <div className='flex flex-col items-center gap-y-20 lg:flex-row gap-x-32 justify-between'>
            <Card />
            <div className='text-white pl-10 flex flex-col gap-y-8'>
                <h3 className='text-4xl font-bold'>Elevate Your Gallery Experience</h3>
                <p className='text-lg font-light'>
                    3D Coverflow is brought to you by TemplateMo. 
                    Transform the way you present images with our cutting-edge 3D coverflow 
                    technology. Create immersive, interactive galleries that captivate 
                    your audience and leave a lasting impression.
                </p>
                <p>
                    Whether you're showcasing portfolio pieces, product images, 
                    or creating an interactive story, our 3D coverflow brings 
                    your content to life with fluid animations and intuitive controls.
                </p>
                <ul className='flex flex-col gap-5 *:relative *:font-normal *:px-10 *:after:absolute *:after:left-0 *:after:top-1/2 *:after:transform *:after:-translate-y-1/2 *:after:content-["✓"] *:after:w-7 *:after:h-7 *:after:bg-gradient-to-br *:after:from-main *:after:to-accent *:after:flex *:after:justify-center *:after:items-center *:after:rounded-full *:text-white'>
                  <li>Smooth 3D transitions with hardware acceleration</li>
                  <li>Touch-enabled navigation for mobile devices</li>
                  <li>Customizable autoplay and timing controls</li>
                  <li>Keyboard navigation support</li>
                  <li>Reflection effects for added depth</li>
                </ul>
                <button className='main-btn w-fit font-medium px-7 py-4 rounded-4xl main-gradient shadow-lg transition-shadow duration-300 hover:shadow-main/50'>
                  Start Your Project
                  <FontAwesomeIcon icon={faArrowRight} className='ml-2'/>
                </button>
            </div>
        </div>
        <div className="stats">

        </div>
      </div>
    </section>
  )
}

export default About
