import React from 'react'
import { styles, images, data } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={`${styles.paddingFooter} flex flex-col bg-black`}>
      <div className={`${styles.paddingY} flex md:flex-row flex-col justify-between items-center border-b-2 border-b-darkGray gap-8 mt-32`}>
        <Link to="/">
          <img src={images.logoLight} alt="logo" className="w-[200px] h-[25px]" onClick={() => window.scrollTo(0, 0)} />
        </Link>
        <ul className="flex md:flex-row flex-col lg:gap-12 gap-6">
          {data.navLinks.map((link) => (
            <Link to={link.path} key={link.link}>
              <li className="text-[14px] text-white hover:text-peach md:text-center text-center" onClick={() => window.scrollTo(0, 0)}>
                {link.link}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className={`${styles.paddingY} flex md:flex-row flex-col justify-between items-center gap-8 md:text-center text-center`}>
        <div>
          <p className="text-gray font-[600]">Designo Central Office</p>
          <p className="text-gray">
            3886 Wellington Street
            <br /> Toronto, Ontario M9C 3J5
          </p>
        </div>

        <div className="text-gray font-[600]">
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p> M : contact@designo.co</p>
        </div>

        <div className="flex gap-4">
          {data.socials.map((social) => (
            <img key={social.id} src={social.image} alt="social" className="hover:opacity-50 hover:cursor-pointer" />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
