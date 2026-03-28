import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-teal-900 to-green-900 text-white pt-12 pb-6">
      
      {/* Top Divider */}
      <div className="max-w-7xl mx-auto px-4 border-t border-white/10 mb-10"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SkinCare</h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Advanced dermatology solutions for healthy, glowing skin. 
            Trusted by thousands for safe and effective treatments.
          </p>
        </div>

        {/* Column 2 - Treatments */}
        <div>
          <h3 className="font-semibold mb-4">Treatments</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">Acne Treatment</a></li>
            <li><a href="#" className="hover:text-white">Anti Aging</a></li>
            <li><a href="#" className="hover:text-white">Laser Therapy</a></li>
            <li><a href="#" className="hover:text-white">Hair Fall</a></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Book Appointment</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-white/70">📍 Pune, India</p>
          <p className="text-sm text-white/70 mt-2">📞 +91 98765 43210</p>
          <p className="text-sm text-white/70 mt-2">✉️ info@skincare.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
        <p>© 2026 SkinCare Clinic. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;