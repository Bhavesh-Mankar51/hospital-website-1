import React from "react";

const Appointment = () => {
  return (
    <section
      id="contact"
      className="min-h-screen pt-16 pb-16 bg-gray-50 flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT SIDE - CLINIC INFORMATION */}
        <div className="flex-1 space-y-8">

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Book Your Visit
            </h2>
            <p className="text-gray-600 max-w-md">
              Schedule an appointment with our dermatologist for expert
              diagnosis and personalized skin treatments.
            </p>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">
              📍 Clinic Address
            </h3>
            <p className="text-gray-600">
              SkinCare Clinic, Bengaluru, Karnataka 560066
            </p>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">
              📞 Phone
            </h3>
            <p className="text-gray-600">
              +91 98765 55555
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">
              ✉️ Email
            </h3>
            <p className="text-gray-600">
              info@skincareclinic.com
            </p>
          </div>

          {/* Timing */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">
              ⏰ Clinic Hours
            </h3>
            <p className="text-gray-600">
              Monday – Saturday : 10:00 AM – 7:00 PM
            </p>
            <p className="text-gray-600">
              Sunday : Closed
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - APPOINTMENT FORM */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-10">

          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Schedule Appointment
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows="4"
              placeholder="Describe your skin concern..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Book Appointment
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Appointment;