import Image from "next/image";
import Link from "next/link";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import Recruitment from "./components/Recruitment";

export default function Home() {
  return (
    <>
      <div className="bg-custom-gradient h-screen flex items-center justify-center mt-[70px]">
        <h1 className="font-gilroy-regular text-xl text-white">
          Hiring Assistant | Recruiting Platform
        </h1>
      </div>
      
      {/* Support Section */}
      <div className="w-full border-b border-blue">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-5 px-5 md:px-20 py-[27px]">
          <h2 className="font-gilroy-bold text-blue sm:text-4xl text-3xl">Easy-to-use ATS<span className="text-[#F4CD59]">.</span></h2>
          <h2 className="font-gilroy-bold text-blue sm:text-4xl text-3xl">Specialized AI agents<span className="text-[#F4CD59]">.</span></h2>
          <h2 className="font-gilroy-bold text-blue sm:text-4xl text-3xl">Business opportunities<span className="text-[#F4CD59]">.</span></h2>
        </div>
      </div>

      {/* Artificial Intelligence Section */}
      <ArtificialIntelligence/>

      {/* Recruitment Section */}
      <Recruitment/>
    </>
  );  
}
