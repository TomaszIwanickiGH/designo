import React, { useState } from 'react'
import { images, styles, data } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <nav className={`${styles.padding} flex justify-between items-center`}>
        <Link to="/">
          <img src={images.logoDark} alt="logo" className="w-[200px] h-[25px]" />
        </Link>
        <ul className="sm:flex hidden gap-8">
          {data.navLinks.map((link) => (
            <Link to={link.path} key={link.id}>
              <li className="text-[14px] hover:text-peach" onClick={() => setToggleMenu(false)}>
                {link.link}
              </li>
            </Link>
          ))}
        </ul>
        <img src={toggleMenu ? images.iconClose : images.iconHamburger} alt="menu" className="sm:hidden flex gap-8" onClick={() => setToggleMenu(!toggleMenu)} />
      </nav>
      {toggleMenu && (
        <div className="bg-black w-full">
          <ul className="flex flex-col gap-8 px-4 py-8">
            {data.navLinks.map((link) => (
              <Link to={link.path} key={link.id}>
                <li className="text-[20px] text-white" onClick={() => setToggleMenu(false)}>
                  {link.link}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
