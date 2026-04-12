import React from "react";
import acneImg from "../../assets/acne_treatment.png";
import antiAgingImg from "../../assets/anti_aging.png";
import hairLossImg from "../../assets/hair_loss.png";
import allergyImg from "../../assets/allergy_care.png";
import moleRemovalImg from "../../assets/mole_removal.png";
import scarTreatmentImg from "../../assets/scar_treatment.png";

const treatments = [
  {
    title: "Acne Treatment",
    desc: "Comprehensive acne care including chemical peels, laser therapy, and customized skincare.",
    duration: "30-45 mins",
    img: acneImg,
  },
  {
    title: "Anti-Aging Treatment",
    desc: "Advanced anti-aging solutions including fillers and rejuvenation therapies.",
    duration: "20-30 mins",
    img: antiAgingImg,
  },
  {
    title: "Hair Loss Treatment",
    desc: "Specialized therapies including PRP, topical treatments, and scalp care.",
    duration: "45-60 mins",
    img: hairLossImg,
  },
  {
    title: "Skin Allergy Care",
    desc: "Expert diagnosis and treatment of allergic reactions and sensitive skin.",
    duration: "15-30 mins",
    img: allergyImg,
  },
  {
    title: "Mole Removal",
    desc: "Safe and precise mole removal procedures with minimal scarring.",
    duration: "20-40 mins",
    img: moleRemovalImg,
  },
  {
    title: "Scar Treatment",
    desc: "Advanced scar reduction therapies including microneedling and laser.",
    duration: "30-60 mins",
    img: scarTreatmentImg,
  },
];

const Treatments = () => {
  return (
    <section
      id="treatments"
      className="min-h-screen pt-20 pb-20 scroll-mt-24 bg-gradient-to-br from-green-50 via-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
        <div className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300"
            >
              
              {/* Image */}
              <div className="relative h-44 sm:h-52 md:h-56 flex items-center justify-center overflow-hidden bg-gray-100">
                <img 
                  src={treatment.img} 
                  alt={treatment.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Overlay Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end">
                  <div className="px-5 py-4">
                    <h3 className="text-white text-lg font-semibold">
                      {treatment.title}
                    </h3>
                  </div>
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