import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        stagger: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Healthy Skin Starts With <br />
          <span className="text-primary">Expert Dermatology Care</span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg md:text-xl mb-8 text-gray-200"
        >
          Advanced skincare treatments, acne solutions, and personalized
          dermatology care to help you achieve radiant and healthy skin.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-primary hover:bg-primary-dark px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105">
            Book Appointment
          </button>

          <button className="border border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full border border-white/60 bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;