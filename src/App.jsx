import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import './App.css'
import Home from './components/home/home'
import Acne from './components/treatments/acnetreatment'
import Pigmentation from './components/treatments/pigmentation'
import Footer from './components/footer/footer'
import AntiAging from './components/treatments/anti-aging'
import HairFall from './components/treatments/hair-fall-treatment'
import Microdermabrasion from './components/treatments/microdermabrasion'
import SkinCancer from './components/treatments/skin-cancer-screening'
import MoleRemoval from './components/treatments/mole-removal'
import Laser from './components/treatments/laser-therapy'
import ChemicalPeels from './components/treatments/chemical-peels'
import Botox from './components/treatments/botox-fillers'
import Scar from './components/treatments/scar-treatment'
import Cosmetic from './components/treatments/cosmetic-dermatology'
import Prescription from './components/prescription/prescription'
import Login from './components/auth/login'
import Dashboard from './components/dashboard/dashboard'
import PrescriptionDetails from './components/dashboard/prescriptionDetails'
import MedicinesInfo from './components/dashboard/medicinesInfo'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === '/prescription';

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acne-treatment" element={<Acne />} />
          <Route path="/pigmentation" element={<Pigmentation />} />
          <Route path="/anti-aging" element={<AntiAging />} />
          <Route path="/hair-fall-treatment" element={<HairFall />} />
          <Route path="/microdermabrasion" element={<Microdermabrasion />} />
          <Route path="/skin-cancer-screening" element={<SkinCancer />} />
          <Route path="/mole-removal" element={<MoleRemoval />} />
          <Route path="/laser-therapy" element={<Laser />} />
          <Route path="/chemical-peels" element={<ChemicalPeels />} />
          <Route path="/botox-&-fillers" element={<Botox />} />
          <Route path="/scar-treatment" element={<Scar />} />
          <Route path="/cosmetic-dermatology" element={<Cosmetic />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/prescription/:id" element={<PrescriptionDetails />} />
          <Route path="/medicines" element={<MedicinesInfo />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default App
