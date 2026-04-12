import React from "react";
import { CheckCircle } from "lucide-react";

const DoctorAbout = () => {
  return (
    <section id="about" className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold tracking-wide">
          ABOUT OUR CLINIC
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Meet Your Doctor
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-3 rounded"></div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            alt="Doctor"
            className="rounded-2xl shadow-lg w-full"
          />

          {/* Floating Experience Card */}
          <div className="absolute bottom-4 left-4 bg-white px-5 py-3 rounded-xl shadow-md flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <p className="font-bold text-lg">12+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            Dr. Rincon Johnson
          </h3>
          <p className="text-green-600 font-semibold mt-1">
            ★ Consultant Dermatologist
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Dr. Rincon Johnson is a board-certified dermatologist with over 12
            years of experience in treating skin, hair, and nail conditions. She
            specializes in acne treatment, cosmetic dermatology, and laser skin
            therapies.
          </p>

          {/* Stats */}
          <div className="mt-6 space-y-3">
            {[
              "12+ Years Experience",
              "MD Dermatology",
              "5,000+ Happy Patients",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-3">Specializations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {[
                "Acne Treatment",
                "Laser Treatment",
                "Cosmetic Dermatology",
                "Anti-Aging Solutions",
                "Skin Cancer Screening",
                "Hair Restoration",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorAbout;