// import { ssrImportKey } from "vite/runtime";

// ssrImportKey;
// import Button from "./Button";
// export default function HeroHomeSection() {
//   return (
//     <section className="bg-[rgba(0,0,0,0.35)] bg-[url('src/assets/images/homeImages/mainHomeImage.png')] bg-cover bg-no-repeat px-8 pb-[6.875rem] pt-[7.25rem] bg-blend-overlay md:mx-24 md:px-[3.625rem] xl:mx-[10.25rem] xl:px-[11.875rem] xl:pe-[23.75rem] xl:pt-[11.625rem]">
//       <h1 className="text-5xl font-bold leading-[3rem] text-white md:text-8xl md:leading-[5rem] md:-tracking-[2px]">
//         Project Paramour
//       </h1>
//       <p className="mb-20 mt-3 line-clamp-3 text-lg font-medium leading-6 text-white">
//         Project made for an art museum near Southwest London. Project Paramour
//         is a statement of bold, modern architecture.
//       </p>
//       <Button pathLink="/portfolio">See Our Portfolio</Button>
//     </section>
//   );
// }
import React, { useState, useEffect } from 'react';
import Button from "./Button";

const HeroHomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images
  const backgroundImages = [
    'src/assets/images/homeImages/mainHomeImage.png',
    // Add more image paths here
    'src/assets/images/homeImages/image2.png',
    'src/assets/images/homeImages/image3.png',
    'src/assets/images/homeImages/image4.png'
  ];

  // Content for each slide
  const slideContent = [
    {
      title: "Project Paramour",
      description: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
    },
    {
      title: "Project Two",
      description: "Description for project two goes here."
    },
    {
      title: "Project Three",
      description: "Description for project three goes here."
    },
    {
      title: "Project Four",
      description: "Description for project four goes here."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative">
      <div
        className="bg-[rgba(0,0,0,0.35)] bg-cover bg-no-repeat px-8 pb-[6.875rem] pt-[7.25rem] bg-blend-overlay md:mx-24 md:px-[3.625rem] xl:mx-[10.25rem] xl:px-[11.875rem] xl:pe-[23.75rem] xl:pt-[11.625rem] transition-all duration-500"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`
        }}
      >
        <h1 className="text-5xl font-bold leading-[3rem] text-white md:text-8xl md:leading-[5rem] md:-tracking-[2px]">
          {slideContent[currentImageIndex].title}
        </h1>
        <p className="mb-20 mt-3 line-clamp-3 text-lg font-medium leading-6 text-white">
          {slideContent[currentImageIndex].description}
        </p>
        <Button pathLink="/portfolio">See Our Portfolio</Button>

        {/* Navigation buttons */}
        <div className="absolute bottom-8 left-8 flex space-x-4">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-12 w-12 flex items-center justify-center text-white border border-white
                ${currentImageIndex === index ? 'bg-white text-black' : 'hover:bg-white/20'}`}
            >
              {(index + 1).toString().padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* Arrow navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-2"
        >
          ← Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-2"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default HeroHomeSection;