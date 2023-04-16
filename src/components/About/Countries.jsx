import React from 'react'
import { data, styles, images } from '../../constants'
import { Link } from 'react-router-dom'

const Country = ({ image, title }) => (
  <div className="flex flex-col lg:gap-8 gap-12  items-center lg:mt-0 mt-16">
    <div style={{ backgroundImage: `url(${images.bgSmallCircle})` }} className=" lg:w-fit w-fit bg-no-repeat">
      <img src={image} alt="advantage" />
    </div>
    <div className="flex flex-col lg:items-center items-center">
      <h3 className="lg:font-[500] font-[600] tracking-[5px] text-[20px]">{title}</h3>
      <Link to="/locations">
        <button className="bg-peach hover:bg-lightPeach text-white px-5 py-3 w-[150px] rounded-md font-[550] xl:mx-0 mx-auto z-10 mt-6" onClick={() => window.scrollTo(0, 0)}>
          SEE LOCATION
        </button>
      </Link>
    </div>
  </div>
)

const Countries = () => {
  return (
    <section className={`${styles.padding} flex lg:flex-row flex-col justify-around xl:my-20 my-8 lg:mt-12 mt-[-2rem]`}>
      {data.countries.map((country) => (
        <Country key={country.title} {...country} />
      ))}
    </section>
  )
}

export default Countries
