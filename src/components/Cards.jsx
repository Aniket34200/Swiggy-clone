import React from "react";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Cards = (propes) => {
  return (
    <div >
      <div className=" w-[270px] h-[360px]">
        <div className="h-48 w-full hover:scale-95 duration-100 cursor-pointer">
          <div className="h-full w-full relative">
            <img
              className="h-full w-full rounded-2xl object-cover  duration-75 opacity-[1]"
              src={propes.image}
              alt=""
            />
            <div className="absolute left-3 bottom-1 text-2xl font-bold text-white opacity-[1] ">
              {propes.offer}
            </div>
          </div>
          <div className=" mx-2 my-2 items-center gap-[2px]">
            <div className="font-bold text-[19px] ">{propes.title}</div>
            <div className="flex items-center">
              <MdStars fill="green" size={20} />
              <div>{propes.rating}</div>
              <GoDotFill size={8} className="mx-1" />
              <div className="font-semibold">
                {propes.minTime}-{propes.maxTime} mins
              </div>
            </div>
            <div>{propes.name}</div>
            <div>{propes.place}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
