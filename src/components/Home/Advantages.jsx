import React from 'react'
import { styles, data, images } from '../../constants'

const Advantage = ({ image, title, description }) => (
  <div className="flex lg:flex-col md:flex-row flex-col gap-8 items-center lg:mt-0 mt-16">
    <div style={{ backgroundImage: `url(${images.bgSmallCircle})` }} className="xl:w-1/2 lg:w-fit md:w-full w-fit bg-no-repeat">
      <img src={image} alt="advantage" />
    </div>
    <div className="flex flex-col lg:items-center md:items-start items-center">
      <h3 className="font-[600] tracking-[5px]">{title}</h3>
      <p className="lg:text-center md:text-start text-center lg:w-[80%] w-full mt-8">{description}</p>
    </div>
  </div>
)

const Advantages = () => {
  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col justify-between lg:mt-20 mt-[-2rem]`}>
      {data.advantages.map((adv) => (
        <Advantage key={adv.title} {...adv} />
      ))}
    </section>
  )
}

export default Advantages
