import React from "react";

const treatments = [
  {
    title: "Acne Treatment",
    desc: "Advanced solutions for acne, pimples, and acne scars using modern dermatology techniques.",
    icon: "🧴",
  },
  {
    title: "Laser Therapy",
    desc: "Laser treatments for pigmentation, scars, and skin rejuvenation.",
    icon: "✨",
  },
  {
    title: "Anti-Aging Treatment",
    desc: "Reduce wrinkles, fine lines, and improve skin elasticity with advanced therapies.",
    icon: "💆‍♀️",
  },
  {
    title: "Hair Loss Treatment",
    desc: "Effective treatments for hair thinning, dandruff, and scalp conditions.",
    icon: "💇‍♂️",
  },
  {
    title: "Skin Allergy Care",
    desc: "Diagnosis and treatment of skin allergies, rashes, and irritation.",
    icon: "🌿",
  },
  {
    title: "Chemical Peels",
    desc: "Improve skin texture and tone with professional chemical peel treatments.",
    icon: "🧪",
  },
];

const Treatments = () => {
  return (
    <section
      id="treatments"
      className="min-h-screen pt-16 pb-16 bg-white flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Treatments Offered
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="treatment-card"
            >
              <div className="content">
                <div className="text-4xl mb-2">{treatment.icon}</div>
                <h3 className="heading">{treatment.title}</h3>
                <p className="para">{treatment.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Treatments;