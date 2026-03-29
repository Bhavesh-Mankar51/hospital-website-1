import React from "react";

const reviews = [
  {
    name: "Priya S.",
    text: "My skin transformed completely in just 3 months!",
  },
  {
    name: "Rahul M.",
    text: "Best dermatology clinic I've ever visited.",
  },
  {
    name: "Ananya K.",
    text: "The results exceeded all my expectations.",
  },
  {
    name: "Karan P.",
    text: "Professional staff and very effective treatments.",
  },
  {
    name: "Neha T.",
    text: "Highly recommend for acne and skin issues.",
  },
  {
    name: "Amit R.",
    text: "Clean clinic, modern equipment, great results.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      
      {/* Wider container (important fix) */}
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-4 py-1 rounded-full">
            PATIENT REVIEWS
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Trusted by Our Patients
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Real experiences from patients who achieved visible skin transformations.
          </p>
        </div>

        {/* Grid (dense & filled) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              
              {/* Stars */}
              <div className="flex mb-3 text-amber-400 text-sm">
                {"★★★★★"}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-3"></div>

              {/* Name */}
              <p className="text-sm font-semibold text-emerald-700">
                — {review.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Reviews;