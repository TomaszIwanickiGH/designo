import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar, HomeWrapper, WebWrapper, GraphicWrapper, AboutWrapper, AppWrapper, LocationsWrapper, Contact, ContactWrapper, Footer } from './components'

const App = () => {
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
      <Contact />
      <Footer />
    </div>
  )
}

export default App
