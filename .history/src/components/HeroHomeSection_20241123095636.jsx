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
import { SwipeCarousel } from "./SwipeCarousel";
import Button from "./Button";

export default function HeroHomeSection() {
  return (
    <section className="relative">
      {/* Your existing hero content */}
      <div className="bg-[rgba(0,0,0,0.35)] bg-[url('src/assets/images/homeImages/mainHomeImage.png')] bg-cover bg-no-repeat px-8 pb-[6.875rem] pt-[7.25rem] bg-blend-overlay md:mx-24 md:px-[3.625rem] xl:mx-[10.25rem] xl:px-[11.875rem] xl:pe-[23.75rem] xl:pt-[11.625rem]">
        <h1 className="text-5xl font-bold leading-[3rem] text-white md:text-8xl md:leading-[5rem] md:-tracking-[2px]">
          Project Paramour
        </h1>
        <p className="mb-20 mt-3 line-clamp-3 text-lg font-medium leading-6 text-white">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <Button pathLink="/portfolio">See Our Portfolio</Button>
      </div>

      {/* Carousel hidden on mobile, visible from md breakpoint up */}
      <div className="absolute right-0 top-0 hidden w-1/2 md:block xl:w-[40%]">
        <SwipeCarousel />
      </div>
    </section>
  );
}
