import React from "react";
import { MapPin, Phone, Mail, Clock, CalendarDays, ArrowRight } from "lucide-react";

const Appointment = () => {
  return (
    <section
      id="contact"
      className="min-h-screen pt-24 pb-20 bg-slate-50 flex items-center relative overflow-hidden scroll-mt-24"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 items-center z-10">

        {/* LEFT SIDE - CLINIC INFORMATION */}
        <div className="flex-1 space-y-10 w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wide">
              <CalendarDays className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Book Your <span className="text-primary">Consultation</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Schedule an appointment with our specialists for expert diagnosis and personalized, advanced skin treatments. We're here to help you achieve your best skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Clinic Address</h3>
              <p className="text-slate-600 leading-relaxed">
                SkinCare Clinic, Bengaluru,<br />Karnataka 560066
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us Directly</h3>
              <p className="text-slate-600 text-lg font-medium">
                +91 98765 55555
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">
                info@skincareclinic.com
              </p>
            </div>

            {/* Timing */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Clinic Hours</h3>
              <p className="text-slate-600">
                Mon – Sat: 10:00 AM – 7:00 PM
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - APPOINTMENT FORM */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none">
          <div className="bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-primary to-emerald-300"></div>
            
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Request an Appointment
              </h3>
              <p className="text-slate-500">Fill out the form below and we'll confirm your visit.</p>
            </div>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Your Concerns</label>
                <textarea
                  rows="4"
                  placeholder="Tell us briefly about your skin concern..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 flex justify-center items-center gap-2"
              >
                <span>Confirm Booking</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Appointment;