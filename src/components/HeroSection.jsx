import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-yellow-400 text-black py-16">
      {/* City Background */}
      <div className="absolute inset-0 bg-[url('/path-to-city-background-image.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">Suit Up Like a Superhero!</h1>
        <p className="mt-2 text-lg">
          Get the drop of limited editions from your favorite universe at Zidio
        </p>
        <img src="zidio-homepage\src\assets\superman.png" alt="Superman" className="mx-auto mt-4 w-1/3" />
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
