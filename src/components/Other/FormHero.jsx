import React from 'react'
import { styles, images } from '../../constants'
import Form from './Form'

const FormHero = () => {
  return (
    <section className={`${styles.paddingSmall} flex xl:flex-row flex-col rounded-lg`}>
      <div className={`${styles.padding} flex flex-col justify-center xl:gap-8 gap-4 bg-peach xl:rounded-ss-2xl xl:rounded-es-2xl xl:rounded-se-none md:rounded-ss-2xl md:rounded-se-2xl bg-no-repeat`} style={{ backgroundImage: `url(${images.bgPatternHeroDesktop})` }}>
        <h2 className="text-white md:text-[48px] text-[32px] xl:text-start text-center font-[500]">Contact Us</h2>
        <p className="text-white md:text-[16px] text-[15px] xl:text-start text-center xl:mb-0 mb-4">
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>
      <Form />
    </section>
  )
}

export default FormHero
