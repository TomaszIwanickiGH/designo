import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { Navbar, HomeWrapper, WebWrapper, GraphicWrapper, AboutWrapper, AppWrapper, LocationsWrapper, ContactWrapper, Footer } from './components'

import { styles } from './constants'

const App = () => {
  const [margin, setMargin] = useState('lg:mt-24 mt-32')
  const [pad, setPad] = useState(styles.paddingFooter)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/contact') {
      setMargin('lg:mt-24 mt-32')
      setPad(styles.paddingFooter)
    } else {
      setMargin('lg:mt-0 mt-0')
      setPad(styles.paddingFooterContact)
    }
  })

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/web-design" element={<WebWrapper />} />
        <Route path="/app-design" element={<AppWrapper />} />
        <Route path="/graphic-design" element={<GraphicWrapper />} />
        <Route path="/about" element={<AboutWrapper />} />
        <Route path="/locations" element={<LocationsWrapper />} />
        <Route path="/contact" element={<ContactWrapper />} />
      </Routes>
      <Footer margin={margin} pad={pad} />
    </div>
  )
}

export default App
