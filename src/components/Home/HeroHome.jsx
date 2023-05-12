import React from 'react'
import { styles, images } from '../../constants'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const HeroHome = () => {
  return (
    <section className={`${styles.paddingSmall}`}>
      <motion.div initial={{ opacity: 0, y: '-30%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-peach relative flex xl:flex-row flex-col justify-between xl:px-16 px-8 sm:rounded-lg overflow-hidden">
        <div className="flex flex-col lg:gap-8 gap-6 xl:w-1/2 w-full xl:py-24 py-12 xl:items-start items-center z-[5]">
          <h2 className="text-white md:text-[48px] text-[32px] xl:text-start text-center">Award-winning custom designs and digital branding solutions</h2>
          <p className="text-white xl:text-start text-center w-[70%]">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <Link to="/about">
            <button className="bg-white hover:bg-lightPeach hover:text-white px-5 py-3 w-[150px] rounded-md font-[550] xl:mx-0 mx-auto z-10" onClick={() => window.scrollTo(0, 0)}>
              LEARN MORE
            </button>
          </Link>
        </div>
        <div className="relative xl:w-1/2 w-full xl:min-h-0 lg:min-h-[600px] md:min-h-[400px] min-h-[300px] md:mt-0 mt-8">
          <img src={images.bgHeroHomeDesktop} alt="circle" className="w-full absolute xl:top-[40px] top-[-25%]" />
          <img src={images.imageHeroPhoneDesktop} alt="phone" className="absolute xl:top-[-40px] lg:top-[-150px] xl:right-[-50px] top-[-100px] w-full z-[0]" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroHome
