import React from 'react'
import { styles, images } from '../../constants'
import { Link } from 'react-router-dom'

const Designs = () => {
  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col gap-6 mt-12 justify-center`}>
      <div className="bg-lightPeach rounded-lg h-fit">
        <div className="relative hover:cursor-pointer hover:opacity-40">
          <img src={images.imageWebDesignLargeDesktop} alt="web" className="rounded-lg brightness-50 object-cover w-full lg:flex hidden" />
          <img src={images.imageWebDesignTablet} alt="web" className="lg:hidden md:flex hidden w-full rounded-lg brightness-50" />
          <img src={images.imageWebDesignMobile} alt="web" className="md:hidden flex w-full rounded-lg brightness-50" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[24px] mb-4">WEB DESIGN</h2>
            <p className="text-white flex lg:text-[15px] text-[12px] justify-center items-center gap-4">
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
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[24px] mb-4">APP DESIGN</h2>
              <p className="text-white flex lg:text-[15px] text-[12px] justify-center items-center gap-4">
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
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[24px] mb-4">GRAPHIC</h2>
              <p className="text-white flex lg:text-[15px] text-[12px] justify-center items-center gap-4">
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
