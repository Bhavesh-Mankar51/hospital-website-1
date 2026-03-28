import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import DoctorAbout from './components/about/about'
import Treatments from './components/treatments/treatments'
import BeforeAfterGallery from './components/gallery/gallery'
import AppointmentSection from './components/appointment/appointment'   
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <DoctorAbout />
      <Treatments />
      <BeforeAfterGallery />
      <AppointmentSection />
      <Footer />
    </>
  )
}

export default App
