import React from 'react'
import { Header, Cards, OtherDesigns } from './index'
import { data } from '../constants'

const WebWrapper = () => {
  return (
    <div>
      <Header
        title="Web Design"
        description="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
      />
      <Cards designs={data.webDesigns} />
      <OtherDesigns design1="App" design2="Graphic" />
    </div>
  )
}

export default WebWrapper
