import React from 'react';
import Hero from '../hero/hero';
import DoctorAbout from '../about/about';
import Treatments from '../treatments/treatments';
import BeforeAfterGallery from '../gallery/gallery';
import AppointmentSection from '../appointment/appointment';

const home = () => {
  return (
    <div>
      <Hero />
      <DoctorAbout />
      <Treatments />
      <BeforeAfterGallery />
      <AppointmentSection />
    </div>
  );
};

export default home;
