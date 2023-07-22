import React from "react";
import { Link } from "react-router-dom";
import OtherCoinMomentary from "../OtherCoinMomentary/OtherCoinMomentary";

function MomentaryPrice() {
  return (
    <section className="momentary-container bg-white rounded-lg py-4 px-10 flex flex-col gap-20">
      <div className="flex justify-center items-center gap-20 gap-5 md:gap-10">
        <div className="flex gap-5">
          <img
            className="w-10 md:w-15 lg:w-20"
            alt=""
            src="./images/home/tether-bg.svg"
          />
          <div className="flex flex-col justify-center items-center text-xs md:text-sm lg:text-[15px]">
            <span className="text-[#009b87] font-bold">46,800 تومان</span>
            <span className="text-gray-600">نرخ لحظه</span>
          </div>
        </div>
        <div>
          <Link
            className="text-[#009b87] font-bold text-xs md:text-sm lg:text-[16px]"
            to="#"
          >
            24 ساعت گذشته
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center text-xs md:text-sm lg:text-[16px]">
          <span className="text-[#d85140] font-bold"> % 9.32-</span>
          <span>تغییر</span>
        </div>
        <div className="flex flex-col justify-center items-center text-xs md:text-sm lg:text-[16px]">
          <span className="font-bold"> {(51500).toLocaleString()}</span>
          <span>بالاترین</span>
        </div>
        <div className="flex flex-col justify-center items-center text-xs md:text-sm lg:text-[16px]">
          <span className="font-bold"> {(46700).toLocaleString()}</span>
          <span>پایین ترین</span>
        </div>
        <div>
          <button className="bg-[#3d6b99] text-white py-2 px-4 rounded-lg text-xs md:text-sm lg:text-[16px]">
            نمودار تتر
          </button>
        </div>
      </div>
      <div>
        <OtherCoinMomentary />
      </div>
    </section>
  );
}

export default MomentaryPrice;
