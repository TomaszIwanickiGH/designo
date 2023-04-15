import React, { useState } from 'react'
import { images, styles } from '../../constants'
import { Link } from 'react-router-dom'

const OtherDesigns = ({ design1, design2 }) => {
  let attr1 = []
  let attr2 = []

  switch (design1) {
    case 'Web':
      attr1 = [images.imageWebDesignSmallDesktop, images.imageWebDesignTablet, images.imageWebDesignMobile, 'WEB DESIGN', '/web-design']
      break
    case 'App':
      attr1 = [images.imageAppDesignDesktop, images.imageAppDesignTablet, images.imageAppDesignMobile, 'APP DESIGN', '/app-design']
      break
    case 'Graphic':
      attr1 = [images.imageGraphicDesignDesktop, images.imageGraphicDesignTablet, images.imageGraphicDesignMobile, 'GRAPHIC', '/graphic-design']
      break

    default:
      attr1 = []
      break
  }

  switch (design2) {
    case 'Web':
      attr2 = [images.imageWebDesignSmallDesktop, images.imageWebDesignTablet, images.imageWebDesignMobile, 'WEB DESIGN', '/web-design']
      break
    case 'App':
      attr2 = [images.imageAppDesignDesktop, images.imageAppDesignTablet, images.imageAppDesignMobile, 'APP DESIGN', '/app-design']
      break
    case 'Graphic':
      attr2 = [images.imageGraphicDesignDesktop, images.imageGraphicDesignTablet, images.imageGraphicDesignMobile, 'GRAPHIC', '/graphic-design']
      break

    default:
      attr2 = []
      break
  }

  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col lg:justify-center lg:items-center gap-8`}>
      <Link to={attr1[4]}>
        <div className="bg-lightPeach rounded-lg" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative hover:cursor-pointer hover:opacity-40">
            <img src={attr1[0]} alt="app" className="rounded-lg brightness-50 lg:w-fit w-full lg:flex hidden" />
            <img src={attr1[1]} alt="app" className="lg:hidden md:flex hidden w-full rounded-lg brightness-50" />
            <img src={attr1[2]} alt="app" className="md:hidden flex w-full rounded-lg brightness-50" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[24px] mb-4">{attr1[3]}</h2>
              <p className="text-white flex lg:text-[15px] text-[12px] justify-center items-center gap-4">
                VIEW PROJECTS <img src={images.iconRightArrow} className="w-[10px] h-[10px]" />
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={attr2[4]}>
        <div className="bg-lightPeach rounded-lg" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative hover:cursor-pointer hover:opacity-40">
            <img src={attr2[0]} alt="graphic" className="rounded-lg brightness-50 lg:w-fit w-full lg:flex hidden" />
            <img src={attr2[1]} alt="graphic" className="lg:hidden md:flex hidden w-full rounded-lg brightness-50" />
            <img src={attr2[2]} alt="graphic" className="md:hidden flex w-full rounded-lg brightness-50" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="text-white xl:text-[40px] lg:text-[30px] text-[24px] mb-4">{attr2[3]}</h2>
              <p className="text-white flex lg:text-[15px] text-[12px] justify-center items-center gap-4">
                VIEW PROJECTS <img src={images.iconRightArrow} className="w-[10px] h-[10px]" />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default OtherDesigns
