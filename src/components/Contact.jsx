import React from 'react'
import { styles, images } from '../constants'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className={`${styles.padding} relative mb-[-10rem] xl:mt-12 mt-4`}>
      <div className={`${styles.padding} bg-peach rounded-lg flex lg:flex-row flex-col justify-between items-center bg-no-repeat`} style={{ backgroundImage: `url(${images.bgDesignPagesIntoTablet})` }}>
        <div className="flex flex-col lg:gap-8 gap-6">
          <h2 className="text-white md:text-[40px] text-[32px] lg:text-start text-center">
            Let’s talk about
            <br /> your project
          </h2>
          <p className="text-white lg:text-start text-center">
            Ready to take it to the next level? Contact us today and find out how <br className="lg:flex hidden" />
            our expertise can help your business grow.
          </p>
        </div>
        <div>
          <Link to="/contact">
            <button className="bg-white hover:bg-lightPeach hover:text-white px-5 py-3 w-[150px] rounded-md font-[550] xl:mx-0 mx-auto z-10 lg:mt-0 md:mb-0 mb-4 mt-8" onClick={() => window.scrollTo(0, 0)}>
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
