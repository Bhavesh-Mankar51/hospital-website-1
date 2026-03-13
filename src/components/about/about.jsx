import React from "react";

const DoctorAbout = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-16 pb-16 bg-gray-50 flex items-center justify-center scroll-mt-24"
    >
      <div className="max-w-6xl w-full px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Doctor
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Doctor Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Doctor"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Dr. Rincon Johnson
            </h3>

            <p className="text-primary font-semibold text-lg mb-4">
              Consultant Dermatologist
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Rincon Johnson is a board-certified dermatologist with over
              12 years of experience in treating skin, hair, and nail
              conditions. She specializes in acne treatment, cosmetic
              dermatology, and laser skin therapies.
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Experience:</span> 12+ Years
              </p>
              <p>
                <span className="font-semibold">Degree:</span> MD Dermatology
              </p>
              <p>
                <span className="font-semibold">Specialization:</span> Acne,
                Laser Treatment, Cosmetic Dermatology
              </p>
            </div>
            <a href="#contact">
              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition transform hover:scale-105">
                Book Consultation
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorAbout;