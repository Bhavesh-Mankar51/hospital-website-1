import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* Clinic Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Skin Clinic</h2>
          <p className="text-gray-200 max-w-sm">
            Providing expert dermatology care including acne treatment,
            laser therapy, and advanced skin solutions for healthy skin.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Doctor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Treatments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Bengaluru, Karnataka 560066</p>
          <p>Phone: +91 98765 55555</p>
          <p>Email: info@skinclinic.com</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-primary-dark mt-10 pt-6 text-center text-gray-200">
        © {new Date().getFullYear()} Skin Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;