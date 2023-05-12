import React from 'react'
import { styles, images, data } from '../../constants'

import { motion } from 'framer-motion'

const Location = ({ title, office, contact, image }) => (
  <div className="flex md:gap-8 xl:even:flex-row-reverse xl:flex-row flex-col-reverse sm:w-fit w-full">
    <div className={`${styles.padding} bg-veryLightPeach flex flex-col justify-center md:rounded-lg xl:min-w-[730px] bg-no-repeat`} style={{ backgroundImage: `url(${images.bgTwoCircles})` }}>
      <h2 className="md:text-[40px] text-[32px] md:text-start text-center text-peach md:mb-6 mb-3">{title}</h2>
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-16 gap-8">
        <div className="md:text-start text-center">
          <p className="font-[600]">{office[0]}</p>
          <p className="md:text-[16px] text-[15px]">{office[1]}</p>
          <p className="md:text-[16px] text-[15px]">{office[2]}</p>
        </div>
        <div className="md:text-start text-center">
          <p className="font-[600]">{contact[0]}</p>
          <p className="md:text-[16px] text-[15px]">{contact[1]}</p>
          <p className="md:text-[16px] text-[15px]">{contact[2]}</p>
        </div>
      </div>
    </div>
    <img src={image[0]} alt="map" className="xl:flex md:hidden flex md:rounded-lg" />
    <img src={image[1]} alt="map" className="xl:hidden md:flex hidden md:rounded-lg" />
  </div>
)

const Locations = () => {
  return (
    <section className={`flex flex-col items-center gap-8 lg:mb-8 md:mt-0 mt-4 mb-16`}>
      {data.locations.map((location, index) => (
        <motion.div initial={{ opacity: 0, y: '-30%' }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.5, duration: 1 }} key={location.title}>
          <Location {...location} />
        </motion.div>
      ))}
    </section>
  )
}

export default Locations
