import Image from "next/image";
import React from "react";
import BannerImage from '@/assets/hero.png'

const Banner = () => {
  return (
    <div className="space-y-[30px] pt-10 bg-gray-300 rounded-lg shadow-md text-center">
      <h2 className="font-bold text-5xl">We Build <br /> <span className="text-purple-600">Productive Apps</span> </h2>
      <p className=" max-w-[700px] mx-auto">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex justify-center  items-center  gap-4 ">
        <button className="btn btn-success">Google Play</button>
        <button className="btn btn-info">App Store</button>
      </div>
      <Image src={BannerImage} alt="Bnner img" className=" w-[750px] h-auto mx-auto"></Image>
    </div>
  );
};
 
export default Banner;
