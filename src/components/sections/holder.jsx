import React from 'react';

export default function InnovateHero() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-8">
      
      {/* Hero Title */}
      <h1 className="text-[clamp(4rem,15vw,12rem)] font-extrabold text-white mb-16 tracking-tight text-center">
        Innovate.
      </h1>

      {/* Image Container */}
      <div className="w-full max-w-6xl h-[500px] mx-auto bg-zinc-950 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/5">
        <img
          src="/images/example.jpg"
          alt="Technology showcase"
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

    </section>
  );
}
