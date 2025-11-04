import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const IconItem = () => {
  return (
    <div className='flex text-white gap-5 light-bg p-5 rounded-2xl border border-white/10 transform hover:translate-x-1.5 transition-all duration-300 shadow-2xl hover:shadow-main/20'>
        <div className='main-gradient  text-2xl rounded-xl flex justify-center items-center w-12 h-12 shrink-0'>
          <FontAwesomeIcon icon={faEnvelope}/>
        </div>
        <div>
          <h4 className='font-bold mb-2'>Email</h4>
          <p className='text-sm text-white/70'>hello@3dcoverflow.com</p>
        </div>
    </div>
  )
}

export default IconItem
