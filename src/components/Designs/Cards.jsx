import React from 'react'
import { styles, data } from '../../constants'

const Card = ({ image, title, text }) => (
  <div className="flex xl:flex-col md:flex-row flex-col xl:w-[350px] xl:h-[478px] md:w-[689px] md:h-[310px] w-[327px] h-[478px]">
    <img
      src={image}
      alt="img"
      className="xl:w-[350px] xl:h-[320px] md:w-[339px] md:h-[310px] w-[327px] h-[320px]
    xl:rounded-ss-lg xl:rounded-se-lg xl:rounded-es-none md:rounded-es-xl md:rounded-se-none rounded-ss-lg rounded-se-lg"
    />
    <div className="bg-veryLightPeach hover:bg-peach text-peach hover:text-white hover:cursor-pointer flex flex-col items-center justify-center gap-4 xl:rounded-es-lg xl:rounded-ee-lg xl:rounded-se-none md:rounded-se-lg md:rounded-es-none rounded-es-lg rounded-ee-lg p-6 xl:min-h-[168px]" id="hover">
      <h3 className="tracking-[5px] text-[20px]">{title}</h3>
      <p className="text-black text-center" id="child">
        {text}
      </p>
    </div>
  </div>
)

const Cards = ({ designs = data.webDesigns }) => {
  return (
    <section className={`${styles.padding} xl:grid xl:grid-cols-3 place-items-center flex flex-col items-center md:gap-8 gap-4 xl:mt-20 mt-8`}>
      {designs.map((design) => (
        <Card key={design.title} {...design} />
      ))}
    </section>
  )
}

export default Cards
