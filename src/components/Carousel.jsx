import { useState } from 'react';
import images from '../constants/images'

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = (index) => {
    if(index < 0)
      index = images.length - 1;
    if(index >= images.length)
      index = 0;
    setCurrentIndex(index);
  }
  const getPosition = (index) => {
    index = Number.parseInt(index);
    const length = images.length;
    let offset = index - currentIndex;

    // If you are at index zero and the images with higher index become +ve but need to be on left side and -ve
    if(offset > (length / 2)) 
      offset = offset - images.length;
    // If you are at index length - 1 and the images with lower index become -ve but need to be on right side and +ve
    // 2 - 6 = -4 index lower than -3 then needs to be on right and +ve
    else if(offset < -(length / 2)) 
      offset = offset + images.length;
    
    const absOffset = Math.abs(offset);
    const sign = Math.sign(offset);
    
    let translateX = offset * 210;
    let translateZ = absOffset * -200;
    let rotateY = -sign * Math.min(absOffset * 60, 60);
    let opacity = 1 - (absOffset * 0.2);
    let scale = 1 - (absOffset * 0.1);
    let zIndex = 30 - absOffset; 
    if (absOffset > 3) {
      opacity = 0;
      translateX = sign * 800;
    }

    return {
      transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    }
  }

  
  return (
    <section id='home' className={`section-container h-screen dark-radial`}>
      <div className="main-container py-10 mx-auto text-white text-center">
        
        <h3 className='text-3xl font-bold mb-2'>{images[currentIndex].title}</h3>
        <p>{images[currentIndex].description}</p>
      
        <div className='relative w-full h-full  flex justify-center items-center'>
          <div className={`relative w-full flex justify-center items-center h-96 perspective-distant`}>
            {
              images.map(({path, id}, index) => { 
                const elementStyle = getPosition(index);
                // console.log(elementStyle);
                return <div 
                  className={`${currentIndex === index ? 'active' : ""} 
                      absolute  w-full max-w-72 h-72 rounded-xl overflow-hidden 
                      transform-3d transform transition-transfor 
                      transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                      [&.active]:translate-x-0 [&.active]:rotate-0 [&.active]:translate-z-0         
                    `} 
                    // top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&.active]:z-[1000]
                  style={elementStyle}
                  key={`${id} image`}
                >
    
                    <img src={path} alt={id} className='w-full h-full object-cover object-center'/>

                  <div className="reflection absolute w-full h-full top- top-full left-0 blur-xs"></div>
                </div> 
              })
            }
          </div>
          <button className='slider-btn absolute right-0' onClick={() => navigate(currentIndex + 1)}><FontAwesomeIcon icon={faChevronRight} /></button>
          <button className='slider-btn absolute left-0' onClick={() => navigate(currentIndex - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <div className='absolute top-full left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-1'>
            {
              Array(images.length).fill(0).map((_, index) => {
                return <button 
                  key={`pagination-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`${currentIndex === index && "opacity-100 scale-[1.05]"}  bg-white w-3.5 h-3.5 rounded-full opacity-30 hover:opacity-50 transform transition-all duration-300`}
                ></button>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
