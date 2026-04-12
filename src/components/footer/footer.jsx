import React from "react";
import { MapPin, Phone, Mail, Heart, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Top accent bar */}
      <div className="h-1 bg-linear-to-r from-primary via-primary-dark to-primary-deep" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-primary mb-3 tracking-tight">SkinCare</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Advanced dermatology solutions for healthy, glowing skin. Trusted by thousands for safe and effective treatments.
            </p>
            <div className="flex gap-3">
              {["f", "in", "ig"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-xs text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Treatments
            </h3>
            <ul className="space-y-3">
              {["Acne Treatment", "Anti Aging", "Laser Therapy", "Hair Fall Treatment", "Scar Treatment"].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition duration-200">
                    <ArrowRight size={13} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Contact", "Book Appointment", "Doctor Login"].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition duration-200">
                    <ArrowRight size={13} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@skincare.com</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-xs text-primary font-semibold mb-1">Working Hours</p>
              <p className="text-xs text-gray-400">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-xs text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            © 2026 SkinCare Clinic. Made with <Heart size={12} className="text-primary fill-primary" /> All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Cookie Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
