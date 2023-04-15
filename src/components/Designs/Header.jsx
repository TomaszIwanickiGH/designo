import React from 'react'
import { styles, images } from '../../constants'

const Header = ({ title, description }) => {
  return (
    <section className={`${styles.paddingSmall}`}>
      <div className={`${styles.padding} bg-peach sm:rounded-lg flex flex-col items-center justify-center lg:gap-8 gap-6`} style={{ backgroundImage: `url(${images.bgCTA})` }}>
        <h2 className="text-white lg:text-[48px] text-[32px]">{title}</h2>
        <p className="text-white xl:w-1/2 text-center">{description}</p>
      </div>
    </section>
  )
}

export default Header
