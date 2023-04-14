import React from 'react'
import { styles, images } from '../../constants'
import { Link } from 'react-router-dom'

const Designs = () => {
  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col gap-6 mt-12 justify-center`}>
      <div className="bg-lightPeach rounded-lg">
        <div className="relative hover:cursor-pointer hover:opacity-40">
          <img src={images.imageWebDesignLargeDesktop} alt="web" className="rounded-lg brightness-50 lg:w-fit w-full lg:flex hidden" />
          <img src={images.imageWebDesignTablet} alt="web" className="lg:hidden md:flex hidden w-full rounded-lg brightness-50" />
          <img src={images.imageWebDesignMobile} alt="web" className="md:hidden flex w-full rounded-lg brightness-50" />
          <div className="absolute lg:top-[42%] lg:left-[27%] md:top-[25%] md:left-[35%] top-[32%] left-[20%]">
            <h2 className="text-white lg:text-[40px] text-[28px] mb-4">WEB DESIGN</h2>
            <p className="text-white flex text-[15px] justify-center items-center gap-4">
              VIEW PROJECTS <img src={images.iconRightArrow} className="w-[10px] h-[10px]" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-lightPeach rounded-lg">
          <div className="relative hover:cursor-pointer hover:opacity-40">
            <img src={images.imageAppDesignDesktop} alt="app" className="rounded-lg brightness-50 lg:w-fit w-full lg:flex hidden" />
            <img src={images.imageAppDesignTablet} alt="app" className="lg:hidden md:flex hidden w-full rounded-lg brightness-50" />
            <img src={images.imageAppDesignMobile} alt="app" className="md:hidden flex w-full rounded-lg brightness-50" />
            <div className="absolute lg:top-[42%] lg:left-[27%] md:top-[25%] md:left-[35%] top-[32%] left-[20%]">
              <h2 className="text-white lg:text-[40px] text-[28px] mb-4">APP DESIGN</h2>
              <p className="text-white flex text-[15px] justify-center items-center gap-4">
                VIEW PROJECTS <img src={images.iconRightArrow} className="w-[10px] h-[10px]" />
              </p>
            </div>
          </div>
        </div>
        <div className="bg-lightPeach rounded-lg">
          <div className="relative hover:cursor-pointer hover:opacity-40">
            <img src={images.imageGraphicDesignDesktop} alt="graphic" className="rounded-lg brightness-50 lg:w-fit w-full lg:flex hidden" />
            <img src={images.imageGraphicDesignTablet} alt="graphic" className="lg:hidden md:flex hidden w-full rounded-lg brightness-50" />
            <img src={images.imageGraphicDesignMobile} alt="graphic" className="md:hidden flex w-full rounded-lg brightness-50" />
            <div className="absolute lg:top-[35%] lg:left-[20%] md:top-[25%] md:left-[30%] top-[32%] left-[10%]">
              <h2 className="text-white lg:text-[40px] text-[28px] mb-4">GRAPHIC DESIGN</h2>
              <p className="text-white flex text-[15px] justify-center items-center gap-4">
                VIEW PROJECTS <img src={images.iconRightArrow} className="w-[10px] h-[10px]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Designs
