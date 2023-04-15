import React from 'react'
import { Header, Cards, OtherDesigns } from './index'
import { data } from '../constants'

const GraphicWrapper = () => {
  return (
    <div>
      <Header
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives."
      />
      <Cards designs={data.graphicDesigns} />
      <OtherDesigns design1="Web" design2="App" />
    </div>
  )
}

export default GraphicWrapper
