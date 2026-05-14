import React from 'react'
import Navbar from './components/Navbar'
import DealsSection from './components/Deals'
import AboutSection from './components/About'
import TeamSection from './components/Team'

const App = () => {
  return (
    <div>
      <DealsSection/>
      <AboutSection/>
      <TeamSection/>
    </div>
  )
}

export default App