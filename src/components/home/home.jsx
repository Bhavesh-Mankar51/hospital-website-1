import React from 'react';
import Hero from '../hero/hero';
import DoctorAbout from '../about/about';
import Treatments from '../treatments/treatments';
import BeforeAfterGallery from '../gallery/gallery';
import AppointmentSection from '../appointment/appointment';
import Footer from '../footer/footer';

const home = () => {
  return (
    <div>
      <Hero />
      <DoctorAbout />
      <Treatments />
      <BeforeAfterGallery />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default home;
