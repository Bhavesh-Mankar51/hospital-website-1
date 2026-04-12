import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('doctorToken'));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('doctorToken'));
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDoctorPortal = async () => {
    if (isLoggedIn) {
      const token = localStorage.getItem('doctorToken');
      await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      }).catch(() => {});
      localStorage.removeItem('doctorToken');
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/login');
    }
    setIsOpen(false);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const treatmentsCol1 = [
    { name: "Acne Treatment", desc: "Clear skin solutions for all acne types" },
    { name: "Anti-Aging", desc: "Reduce wrinkles and fine lines" },
    { name: "Hair Fall Treatment", desc: "Restore hair growth and thickness" },
    { name: "Microdermabrasion", desc: "Gentle skin resurfacing treatment" },
    { name: "Skin Cancer Screening", desc: "Early detection and prevention" },
    { name: "Mole Removal", desc: "Safe removal of unwanted moles" },
  ];

  const treatmentsCol2 = [
    { name: "Laser Therapy", desc: "Advanced laser skin rejuvenation" },
    { name: "Pigmentation", desc: "Even skin tone and brighten complexion" },
    { name: "Chemical Peels", desc: "Exfoliate and renew your skin" },
    { name: "Botox & Fillers", desc: "Non-surgical facial enhancement" },
    { name: "Scar Treatment", desc: "Minimize and fade scars" },
    { name: "Cosmetic Dermatology", desc: "Enhance your natural beauty" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-primary hover:scale-110 transition-transform duration-300">
            SkinCare
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
            <button onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-primary transition duration-300 hover:-translate-y-1 cursor-pointer">
              Home
            </button>
            <button onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-primary transition duration-300 hover:-translate-y-1 cursor-pointer">
              About
            </button>

            {/* Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTreatmentsOpen(true)}
              onMouseLeave={() => setTreatmentsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-primary transition duration-300 font-medium ">
                Treatments
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${treatmentsOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {treatmentsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[min(700px,90vw)] z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                  {/* Header */}
                  <div className="bg-linear-to-r from-primary to-teal-400 px-6 py-4">
                    <p className="text-white font-bold text-lg">Our Treatments</p>
                    <p className="text-white/80 text-sm">Comprehensive dermatology services for all your skin needs</p>
                  </div>

                  {/* Two Column Grid */}
                  <div className="grid grid-cols-2 gap-0 p-4">

                    {/* Column 1 */}
                    <div className="pr-2">
                      {treatmentsCol1.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => navigate(`/${item.name.toLowerCase().replace(/\s+/g, "-")}`)}
                          className="w-full text-left block px-4 py-3 rounded-xl transition duration-200 hover:bg-teal-50 group"
                        >
                          <p className="font-semibold text-sm text-gray-800 group-hover:text-primary">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        </button>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div className="pl-2 border-l border-gray-100">
                      {treatmentsCol2.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => navigate(`/${item.name.toLowerCase().replace(/\s+/g, "-")}`)}
                          className="w-full text-left block px-4 py-3 rounded-xl transition duration-200 hover:bg-teal-50 group"
                        >
                          <p className="font-semibold text-sm text-gray-800 group-hover:text-primary">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-100 px-6 py-3 flex items-center justify-between bg-gray-50">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Can't find what you're looking for?</p>
                      <p className="text-xs text-gray-500">Contact us for personalized treatment recommendations</p>
                    </div>
                    <button onClick={(e) => handleScrollTo(e, 'contact')} className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-300 whitespace-nowrap cursor-pointer">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
                </div>
              )}
            </div>

            <button onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-primary transition duration-300 hover:-translate-y-1 cursor-pointer">
              Contact
            </button>
          </div>

          {/* Appointment & Doctor Portal Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={handleDoctorPortal} className="text-primary hover:text-primary-dark font-medium transition duration-300 cursor-pointer flex justify-center items-center gap-1">
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <button onClick={(e) => handleScrollTo(e, 'contact')} className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark hover:scale-105 transition duration-300 cursor-pointer">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col px-4 py-3 space-y-3 text-gray-700">
          <button onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }} className="text-left hover:text-primary transition">Home</button>
          <button onClick={(e) => handleScrollTo(e, 'about')} className="text-left hover:text-primary transition">About</button>

          {/* Mobile Treatments Accordion */}
          <div>
            <button
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              className="w-full text-left hover:text-primary transition font-medium flex items-center justify-between"
            >
              Treatments
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${treatmentsOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {treatmentsOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2 text-sm text-gray-600">
                {[...treatmentsCol1, ...treatmentsCol2].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => { navigate(`/${item.name.toLowerCase().replace(/\s+/g, "-")}`); setIsOpen(false); }}
                    className="text-left hover:text-primary transition"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={(e) => handleScrollTo(e, 'contact')} className="text-left hover:text-primary transition">Contact</button>
          <button onClick={(e) => handleScrollTo(e, 'contact')} className="bg-primary text-white w-full py-2 rounded-lg hover:bg-primary-dark transition text-center cursor-pointer">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;