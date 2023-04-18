import React from 'react'
import { styles, images } from '../../constants'

const Form = () => {
  return (
    <section className={`${styles.padding} bg-peach w-full xl:rounded-se-2xl xl:rounded-es-none md:rounded-ee-2xl md:rounded-es-2xl`}>
      <form className="flex flex-col gap-3 text-white">
        <input type="text" placeholder="Name" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white hover:cursor-pointer outline-none border-b-2 border-b-white " />
        <input type="email" placeholder="Email Address" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white hover:cursor-pointer outline-none border-b-2 border-b-white " />
        <input type="tel" placeholder="Phone" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white hover:cursor-pointer outline-none border-b-2 border-b-white " />
        <textarea placeholder="Your Message" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white hover:cursor-pointer outline-none border-b-2 border-b-white resize-none h-[100px]"></textarea>
        <div className="flex justify-end">
          <button className="bg-white hover:bg-lightPeach hover:text-white text-black px-5 py-3 w-[150px] rounded-md font-[550] xl:mx-0 mx-auto z-10 lg:mt-4 md:mb-0 mb-4 mt-8">SUBMIT</button>
        </div>
      </form>
    </section>
  )
}

export default Form
