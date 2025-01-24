import React from 'react';

const LandingSection = () => {
  return (
    <section className="relative w-full lg:h-[60vh] h-[50vh] contactUs-page-bg">
      {/* Top-to-Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent h-3/4 z-0" />
      {/* Bottom-to-Top Overlay */}
      <div className="absolute w-full lg:h-[130vh] h-[70vh] bottom-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
      {/* Content */}
    </section>
  );
};

export default LandingSection;
