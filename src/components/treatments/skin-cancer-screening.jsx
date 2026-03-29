import React from 'react';

const SkinCancer = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen px-4 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">Skin Cancer <span className="text-amber-600">Screening</span></h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
          Experience our world-class skin cancer screening specifically tailored for your needs.
          We provide advanced clinical care to ensure the safest and best possible results.
        </p>
      </div>

      <div className="w-full grid lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-amber-900/5 border border-slate-100 transition-all duration-300 hover:shadow-amber-900/15 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 border-b border-orange-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Result {index + 1}</h2>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold tracking-wide">Before & After</span>
            </div>
            <div className="p-5">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80" 
                alt="placeholder clinic" 
                className="w-full h-auto object-cover rounded-xl shadow-sm border border-slate-200/60"
              />
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-700">Before</h3>
                  <p className="text-slate-500 text-xs mt-1">Suspicious Mole</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-100">
                  <h3 className="text-sm font-bold text-amber-700">After</h3>
                  <p className="text-amber-500 text-xs mt-1">Healthy Skin</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinCancer;
