import React, { useState, useEffect } from 'react'
import Image from '../../assets/Image-1.jpg'
function ImageWithFallback({ src, alt, className, style, ...rest }) {
  const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='
  const [didError, setDidError] = useState(false)
  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  )
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={Image}
          alt="Skincare treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/50 to-black/40"></div>
      </div>

      {/* Animated Orbs */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center mt-10">

        {/* Badge */}
        <div style={fadeUp(0.2)} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20">
          <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span className="text-sm">Premium Dermatology Services</span>
        </div>

        {/* Heading */}
        <h1 style={fadeUp(0.4)} className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
          Healthy Skin Starts With
          <br />
          <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Expert Dermatology Care
          </span>
        </h1>

        {/* Description */}
        <p style={fadeUp(0.6)} className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed px-2 sm:px-0">
          Advanced skincare treatments, acne solutions, and personalized dermatology care
          to help you achieve radiant and healthy skin.
        </p>

        {/* Buttons */}
        <div style={fadeUp(0.8)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Schedule Consultation
          </button>
          <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-full transition-all duration-300 cursor-pointer">
            View Treatments
          </button>
        </div>

        {/* Stats */}
        <div style={fadeUp(1)} className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-14 sm:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all  cursor-pointer"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}