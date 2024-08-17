import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Aboutus from './components/Aboutus'
import Services from './components/Services'

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Main/>
        <Aboutus/>
        <Services/>
    </div>
  )
}

export default App