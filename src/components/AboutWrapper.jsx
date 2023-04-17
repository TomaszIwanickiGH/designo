import React from 'react'
import { HeroAbout, Description, Countries, Contact } from './index'
import { images } from '../constants'

const AboutWrapper = () => {
  return (
    <div>
      <HeroAbout />
      <Description />
      <Countries />
      <Description
        image={[images.imageHeroAboutRealDealDesktop, images.imageHeroAboutRealDealTablet, images.imageHeroAboutRealDealMobile]}
        title="The real deal"
        desc1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        desc2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        classes={['xl:flex-row flex-col-reverse', 'xl:rounded-ss-2xl xl:rounded-ee-none md:rounded-es-2xl md:rounded-ee-2xl', 'xl:rounded-se-2xl xl:rounded-ee-2xl', 'md:rounded-ss-2xl md:rounded-se-2xl']}
      />
      <Contact />
    </div>
  )
}

export default AboutWrapper
