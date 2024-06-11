"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-10 xl:-right-28 z-10 cursor-pointer lg:block hidden"
      onClick={onClick}
    >
      <svg
        width="67"
        height="136"
        viewBox="0 0 67 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L64 71.3199L2 134"
          stroke="white"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -left-10 xl:-left-28 z-10 cursor-pointer lg:block hidden"
      onClick={onClick}
    >
      <svg
        width="67"
        height="136"
        viewBox="0 0 67 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65 134L3 64.6801L65 2"
          stroke="white"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const AllInOne = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: "Candidate Management",
      description:
        "Streamline candidate data storage, enhance CV parsing, and collect valuable feedback.",
      image: "/assets/candidate-management.png",
      height:800,
      width:300,
    },
    {
      title: "Marketplace",
      description:
        "Connect with a network of professionals, discover opportunities, and foster collaborative success in a dynamic recruitment ecosystem.",
      image: "/assets/marketplace.png",
      height:800,
      width:300,
    },
    {
      title: "ATS",
      description:
        "Simplify your hiring workflows, track applicant progress, and make informed decisions with intuitive process management tools.",
      image: "/assets/ats.png",
      height:800,
      width:300,
    },
  ];

  return (
    <div className="bgcustom1 my-10 pb-[10rem] sm:pb-[16rem] md:pb-[400px]">
      <div className="max-w-[1440px] w-full mx-auto">
        <h2 className="font-gilroy-regular text-white sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px] pt-[361px] lg:pt-[270px] pb-[63px] text-center">
          Your <span className="font-gilroy-bold text-[#F4CD59]">all-in-one</span> platform for recruitment
          <span className='text-[#F4CD59]'>.</span>
        </h2>
        <div className="carousel-container mx-auto w-full max-w-[847px] h-[410px] relative px-5">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-full flex items-center justify-center">
                <div className="bg-white w-full max-w-[847px] h-[465px] md:h-[410px] rounded-[15px] shadow-md p-6 md:p-10 flex flex-col items-center gap-6">
                  <h3 className="text-blue font-gilroy-bold text-[24px] md:text-[40px] leading-[29px] md:leading-[49.52px] w-full text-left">{slide.title}</h3>
                  <div className="flex md:flex-row flex-col items-start justify-between gap-6">
                    <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[28.8px] font-gilroy-regular mt-[12px] md:max-w-[414px]">{slide.description}</p>
                    <Image src={slide.image} alt={slide.title} className=" object-contain" width={500} height={500}/>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
