import React from 'react'
import { Header, Cards, OtherDesigns } from './index'
import { data } from '../constants'

const AppWrapper = () => {
  return (
    <div>
      <Header
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      <Cards designs={data.appDesigns} />
      <OtherDesigns design1="Web" design2="Graphic" />
    </div>
  )
}

export default AppWrapper
