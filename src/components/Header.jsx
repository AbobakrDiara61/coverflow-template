import React, { useState } from 'react'
import Logo from './Logo'
const links = [
  {
    name: "Home",
    path: "#home",
    id: "link-header0",
  },
  {
    name: "About",
    path: "#about",
    id: "link-header1",
  },
  {
    name: "Contact",
    path: "#contact",
    id: "link-header2",
  },
  {
    name: "Github",
    path: "https://github.com/AbobakrDiara61/coverflow-template",
    id: "link-header3",
  },
]
const Header = () => {
  const [index, setIndex] = useState(0);
  return (
    <header className='h-20 fixed left-0 top-0 w-full bg-black/80 backdrop-blur-sm text-white flex items-center z-50'>
      <div className="main-container flex justify-between items-center">

        <div className='flex items-center'>
          <Logo color='url(#mainGrad' strokeColor='url(#mainGrad)'/>
          {/* <Logo color="url(#grad1)" strokeColor="url(#grad1)" /> */}

          <a href="#home"><h1 className='ml-3 text-2xl font-medium'>3D Coverflow</h1></a>
        </div>
        <ul className='nav-links flex items-center gap-7'>
          {links.map(({name, path, id}, i) => (
            <li key={name} id={id}>
              <a href={path} className={`${index === i && "active"} transform hover:translate-y-1 `} >{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
