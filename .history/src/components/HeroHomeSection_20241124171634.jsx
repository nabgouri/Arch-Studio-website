import { useState, useEffect } from "react";
import Button from "./Button";

const HeroHomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    "src/assets/images/homeImages/mainHomeImage.png",
    // Add more image paths here
    "src/assets/images/homeImages/secondlyImage.png",
    "src/assets/images/homeImages/thirdlyImage.png",
    "src/assets/images/homeImages/fourthImage.png",
  ];

  // Content for each slide
  const slideContent = [
    {
      title: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      title: "Seraph Station",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      title: "Federal II Tower",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      title: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="block bg-[rgba(0,0,0,0.35)] bg-[url('src/assets/images/homeImages/mainHomeImage.png')] bg-cover bg-no-repeat px-8 pb-[6.875rem] pt-[7.25rem] bg-blend-overlay md:mx-24 md:hidden md:px-[3.625rem] xl:mx-[10.25rem] xl:px-[11.875rem] xl:pe-[23.75rem] xl:pt-[11.625rem]">
        <h1 className="text-5xl font-bold leading-[3rem] text-white md:text-8xl md:leading-[5rem] md:-tracking-[2px]">
          Project Paramour
        </h1>
        <p className="mb-20 mt-3 line-clamp-3 text-lg font-medium leading-6 text-white">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <Button pathLink="/portfolio">See Our Portfolio</Button>
      </section>
      <section className="relative hidden md:block">
        <div
          className="bg-[rgba(0,0,0,0.35)] bg-cover bg-no-repeat px-8 pb-[6.875rem] pt-[7.25rem] bg-blend-overlay transition-all duration-500 md:mx-24 md:px-[3.625rem] xl:mx-[10.25rem] xl:px-[11.875rem] xl:pe-[23.75rem] xl:pt-[11.625rem]"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
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
          <div className="absolute bottom-0 left-[5.25rem] flex">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`hidden h-20 w-20 items-center justify-center xl:flex ${currentImageIndex === index ? "bg-[#1b1d23] text-lg font-bold leading-6 text-white" : "bg-white text-[#7D828F] hover:bg-[#EEEFF4]"}`}
              >
                {(index + 1).toString().padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeSection;
