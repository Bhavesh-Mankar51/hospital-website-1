import React from "react";

const treatments = [
  {
    title: "Acne Treatment",
    desc: "Comprehensive acne care including chemical peels, laser therapy, and customized skincare.",
    duration: "30-45 mins",
  },
  {
    title: "Anti-Aging Treatment",
    desc: "Advanced anti-aging solutions including fillers and rejuvenation therapies.",
    duration: "20-30 mins",
  },
  {
    title: "Hair Loss Treatment",
    desc: "Specialized therapies including PRP, topical treatments, and scalp care.",
    duration: "45-60 mins",
  },
  {
    title: "Skin Allergy Care",
    desc: "Expert diagnosis and treatment of allergic reactions and sensitive skin.",
    duration: "15-30 mins",
  },
  {
    title: "Mole Removal",
    desc: "Safe and precise mole removal procedures with minimal scarring.",
    duration: "20-40 mins",
  },
  {
    title: "Scar Treatment",
    desc: "Advanced scar reduction therapies including microneedling and laser.",
    duration: "30-60 mins",
  },
];

const Treatments = () => {
  return (
    <section
      id="treatments"
      className="min-h-screen pt-20 pb-20 scroll-mt-24 bg-gradient-to-br from-green-50 via-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Treatments Offered
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Our comprehensive range of advanced treatments tailored to your specific skin needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300"
            >
              
              {/* Image Placeholder */}
              <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Image will be displayed here
                </span>

                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-4 py-2 text-sm font-semibold">
                  {treatment.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {treatment.desc}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    Duration: {treatment.duration}
                  </span>
                  <button className="text-blue-600 font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;