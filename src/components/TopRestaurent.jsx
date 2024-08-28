import React from 'react'
import Data from '../assets/topRestaurent.json'
import { useEffect, useState } from 'react'
import Cards from './Cards'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const TopRestaurent = () => {

    const [slide, setSlide] = useState(0)
    const [topres, setTopres] = useState([])

    const fetchTopRes = async () =>{
        const response = await fetch('../assets/topRestaurent.json')
        const data = await response.json()
        setTopres(data)
    }

    useEffect(() => {
        fetchTopRes()
    }, [])

    const previousSlide = () => {
      if (slide == 0) {
        return false;
      } else {
        setSlide(slide - 1.5);
      }
    };
  
    const nextSlide = () => {
      if (slide >= 6.5) {
        return false;
      } else {
        setSlide(slide + 1.5);
      }
    };


  return (
    <div>
       <div className="max-w-[1130px] mx-auto">
        <div className="  flex items-center justify-between my-3">
          <div className="text-2xl font-bold mb-3 ">Top restaurant chains in Nagpur</div>
          <div className="flex ">
            <div
              onClick={previousSlide}
              className="w-[30px] h-[30px] bg-[#e2e2e7]  rounded-full mx-[6px]"
            >
              <FaArrowLeft className="items-center w-full h-full p-2 cursor-pointer" />
            </div>
            <div
              onClick={nextSlide}
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-[6px]"
            >
              <FaArrowRight className="items-center w-full h-full p-2 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className='flex gap-10 overflow-hidden'>
        {
          Data.map((eachData, index) =>{
            return(
              <div className='shrink-0  duration-500 ' key={index} style={{
                transform: `translateX(-${slide * 100}%)`
            }}>
                <Cards {...eachData} key={index}/>
              </div>

            )
          })
        }
        </div>
  
      </div>
      <hr className='mt-2 mb-8 border-[1px]' />
    </div>
  )
}

export default TopRestaurent
