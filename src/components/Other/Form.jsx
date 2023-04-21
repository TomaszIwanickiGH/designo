import React, { useState } from 'react'
import { styles, images } from '../../constants'

const Form = () => {
  const [nameInput, setNameInput] = useState({ val: '', message: "Can't be empty", image: images.iconError })

  const [emailInput, setEmailInput] = useState({ val: '', message: "Can't be empty", image: images.iconError })

  const [telInput, setTelInput] = useState({ val: '', message: "Can't be empty", image: images.iconError })

  const [areaInput, setAreaInput] = useState({ val: '', message: "Can't be empty", image: images.iconError })

  const handleNameChange = (e) => {
    setNameInput({
      nameInput: {
        val: e.target.value,
        message: e.target.value.length !== 0 ? '' : "Can't be empty",
        image: e.target.value.length !== 0 ? '' : images.iconError,
      },
    })
  }

  const handleEmailChange = (e) => {
    setEmailInput({
      emailInput: {
        val: e.target.value,
        message: e.target.value.length !== 0 ? '' : "Can't be empty",
        image: e.target.value.length !== 0 ? '' : images.iconError,
      },
    })
  }

  const handleTelChange = (e) => {
    setTelInput({
      telInput: {
        val: e.target.value,
        message: e.target.value.length !== 0 ? '' : "Can't be empty",
        image: e.target.value.length !== 0 ? '' : images.iconError,
      },
    })
  }

  const handleAreaChange = (e) => {
    setAreaInput({
      areaInput: {
        val: e.target.value,
        message: e.target.value.length !== 0 ? '' : "Can't be empty",
        image: e.target.value.length !== 0 ? '' : images.iconError,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className={`${styles.padding} bg-peach w-full xl:rounded-se-2xl xl:rounded-es-none md:rounded-ee-2xl md:rounded-es-2xl`}>
      <form className="flex flex-col gap-3 text-white">
        <div className="flex justify-between items-center border-b-2 border-b-white">
          <input id="name-i" type="text" placeholder="Name" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white focus:placeholder:text-white hover:cursor-pointer outline-none" onChange={handleNameChange} />
          <p id="name-p" className="hidden text-right text-[14px]">
            {nameInput.message}
            <img src={nameInput.image} alt="" className="ml-2" />
          </p>
        </div>

        <div className="flex justify-between items-center border-b-2 border-b-white">
          <input id="email-i" type="email" placeholder="Email Address" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white focus:placeholder:text-white hover:cursor-pointer outline-none" onChange={handleEmailChange} />
          <p id="email-p" className="hidden text-right text-[14px]">
            {emailInput.message}
            <img src={emailInput.image} alt="" className="ml-2" />
          </p>
        </div>

        <div className="flex justify-between items-center border-b-2 border-b-white">
          <input id="tel-i" type="tel" placeholder="Phone" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white focus:placeholder:text-white hover:cursor-pointer outline-none" onChange={handleTelChange} />
          <p id="tel-p" className="hidden text-right text-[14px]">
            {telInput.message}
            <img src={telInput.image} alt="" className="ml-2" />
          </p>
        </div>

        <div className="flex justify-between items-center border-b-2 border-b-white">
          <textarea id="area-i" placeholder="Your Message" className="py-4 px-2 bg-peach placeholder:text-placeholder hover:placeholder:text-white focus:placeholder:text-white hover:cursor-pointer outline-none resize-none h-[100px]" onChange={handleAreaChange} />
          <p id="area-p" className="hidden text-right text-[14px]">
            {areaInput.message}
            <img src={areaInput.image} alt="" className="ml-2" />
          </p>
        </div>
        <div className="flex justify-end">
          <button className="bg-white hover:bg-lightPeach hover:text-white text-black px-5 py-3 w-[150px] rounded-md font-[550] xl:mx-0 mx-auto z-10 lg:mt-4 md:mb-0 mb-4 mt-8" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
