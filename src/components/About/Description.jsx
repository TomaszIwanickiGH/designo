import React from 'react'
import { styles, images } from '../../constants'

const Description = ({
  image = [images.imageHeroAboutWorldClassDesktop, images.imageHeroAboutWorldClassTablet, images.imageHeroAboutWorldClassMobile],
  title = 'World-class talent',
  desc1 = 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
  desc2 = 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
  classes = ['xl:flex-row-reverse flex-col-reverse', 'xl:rounded-se-2xl xl:rounded-ee-2xl xl:rounded-es-none md:rounded-es-2xl md:rounded-ee-2xl', 'rounded-ss-2xl rounded-es-2xl', 'rounded-ss-2xl rounded-se-2xl'],
}) => {
  return (
    <section className={`${styles.paddingSmall} flex ${classes[0]} xl:mt-24 md:mt-16`}>
      <div className={`${styles.padding} flex flex-col justify-center xl:gap-8 gap-4 bg-veryLightPeach ${classes[1]}`}>
        <h2 className="text-peach md:text-[40px] text-[32px] xl:text-start text-center">{title}</h2>
        <p className="text-black md:text-[16px] text-[15px] xl:text-start text-center xl:mb-0 mb-4">{desc1}</p>
        <p className="text-black md:text-[16px] text-[15px] xl:text-start text-center xl:mb-0 mb-4">{desc2}</p>
      </div>
      <img src={image[0]} alt="about-hero" className={`${classes[2]} xl:flex hidden`} />
      <img src={image[1]} alt="about-hero" className={`${classes[3]} xl:hidden md:flex hidden`} />
      <img src={image[2]} alt="about-hero" className="md:hidden flex" />
    </section>
  )
}

{
  // xl:rounded-ss-2xl xl:rounded-ee-none md:rounded-es-2xl md:rounded-ee-2xl
  /* <img src={images.imageHeroAboutWorldClassDesktop} alt="about-hero" className="rounded-se-2xl rounded-ee-2xl xl:flex hidden" />
      <img src={images.imageHeroAboutWorldClassTablet} alt="about-hero" className="rounded-ss-2xl rounded-se-2xl xl:hidden md:flex hidden" />
      <img src={images.imageHeroAboutWorldClassMobile} alt="about-hero" className="md:hidden flex" /> */
}

export default Description
