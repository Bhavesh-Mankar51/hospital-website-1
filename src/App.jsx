import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import './App.css'
import Home from './components/home/home'
import Acne from './components/treatments/acnetreatment'
import Pigmentation from './components/treatments/pigmentation'


function App() {


  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acne-treatment" element={<Acne />} />
          <Route path="/pigmentation" element={<Pigmentation />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
