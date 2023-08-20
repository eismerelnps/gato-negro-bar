"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Image from "next/image";

//Slideshow Images
import banner_home from "../../../../public/slideshow/banner_home.jpg";
import cocacola from "../../../../public/slideshow/cocacola.jpg";
import pizza2 from "../../../../public/slideshow/pizza2.jpg";
import rones from "../../../../public/slideshow/rones.jpg";
import banner_confituras from "../../../../public/slideshow/banner_confituras.jpg";
import heineken from "../../../../public/slideshow/heineken.jpg";


import maripitas from "../../../../public/slideshow/maripitas.jpeg";
import havana_club_3_annos from "../../../../public/slideshow/havana_club_3_annos.jpg";
import havana_club_profundo from "../../../../public/slideshow/havana_club_profundo.jpg";
import mani_grano from "../../../../public/slideshow/mani_grano.jpg";
import mantequilla_mani from "../../../../public/slideshow/mantequilla_mani.jpg";
import pizza from "../../../../public/slideshow/pizza.jpg";
import rothmans_morado from "../../../../public/slideshow/rothmans_morado.jpeg";
import turron_panfilo from "../../../../public/slideshow/turron_panfilo.jpeg";

import { useRouter } from "next/navigation";


const slides = [
  {
    image: banner_home,
    alt: "",
  },
  {
    image: banner_confituras,
    alt: "",
  },
  {
    image: cocacola,
    alt: "",
  },
  {
    image: pizza2,
    alt: "",
  },
  {
    image: heineken,
    alt: "",
  },
  {
    image: rones,
    alt: "",
  },
  {
    image: pizza,
    alt: "",
  },
  {
    image: maripitas,
    alt: "",
  },
];



const SlideshowADS = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleToMenu = () => {
    router.push('/menu')
  }
  return (
    <div
   
      className={`slideshow mt-1 relative overflow-hidden w-full h-[80px] xs:h-[110px] 400:h-[120px] sm:h-[230px] md:h-[240px] lg:h-[280px] xl:h-[380px]`}
    >
      {slides.map(({ image, alt }, i) => (
        <Image
          className={`animate__animated  absolute top-0 left-0 object-cover delay-700 w-full h-auto   
          ${
            index === i ? " animate__fadeInRight z-[1]  " : " opacity-0"
          }  `}
         width={1200}
         height={450}
          key={i}
          src={image}
          alt={alt}
        />
      ))}

      <div className=" absolute bottom-0 left-0 right-0  opacity-60 text-white  text-center z-[2]">
        {/* If you want to add caption to photos use this slot */}
        {slides.map((slide, i) => (
          <span
            key={i}
            className={`z-20  cursor-pointer  mx-0.5 h-3 w-3 rounded-full inline-block transition duration-600 ease  hover:bg-white ${
              index === i
                ? "bg-slate-50 opacity-90  "
                : " bg-slate-400 opacity-60"
            }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <nav
        className=" absolute cursor-pointer top-1/2 w-auto  mt-[-22px] p-2 sm:p-4 text-white font-bold text-lg transition duration-600 ease rounded-tr rounded-br  select-none  hover:bg-slate-950 hover:opacity-40 hover:text-white z-[2]"
        onClick={handlePrevSlide}
      >
        &#10094;
      </nav>
      <nav
        className="absolute cursor-pointer top-1/2 right-0 w-auto  mt-[-22px] p-2 sm:p-4 text-white font-bold text-lg transition duration-600 ease rounded-tl rounded-bl  select-none  hover:bg-slate-950 hover:opacity-40 hover:text-white z-[2]"
        onClick={handleNextSlide}
      >
        &#10095;
      </nav>
    </div>
  );
};

SlideshowADS.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      description: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
  transition: PropTypes.string,
  captionPosition: PropTypes.oneOf(["top", "bottom"]),
  // width: PropTypes.string,
  // height: PropTypes.string,
  alt: PropTypes.string,
  onError: PropTypes.func,
};

SlideshowADS.defaultProps = {
  interval: 3000,
  transition: "opacity 1s ease-in-out",
  captionPosition: "bottom",
  width: "100%",
  height: "500px",
  onError: () => {},
};

export default SlideshowADS;
