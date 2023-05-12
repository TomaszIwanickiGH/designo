import React from 'react'
import { styles, images } from '../../constants'

import { motion } from 'framer-motion'

const HeroAbout = () => {
  return (
    <motion.section initial={{ opacity: 0, y: '-30%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className={`${styles.paddingSmall} flex xl:flex-row flex-col-reverse rounded-lg`}>
      <div className={`${styles.padding} flex flex-col justify-center xl:gap-8 gap-4 bg-peach xl:rounded-ss-2xl xl:rounded-ee-none md:rounded-es-2xl md:rounded-ee-2xl`} style={{ backgroundImage: `url(${images.bgHeroAboutDesktop})` }}>
        <h2 className="text-white md:text-[48px] text-[32px] xl:text-start text-center font-[600]">About Us</h2>
        <p className="text-white md:text-[16px] text-[15px] xl:text-start text-center xl:mb-0 mb-4">
          Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that
          connect with our clients’ audiences.
        </p>
      </div>
      <img src={images.imageHeroAboutDesktop} alt="about-hero" className="rounded-se-2xl rounded-ee-2xl xl:flex hidden" />
      <img src={images.imageHeroAboutTablet} alt="about-hero" className="rounded-ss-2xl rounded-se-2xl xl:hidden md:flex hidden" />
      <img src={images.imageHeroAboutMobile} alt="about-hero" className="md:hidden flex" />
    </motion.section>
  )
}

export default HeroAbout
