import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from 'react';
import data from '../assets/categoryData.json'

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchCategory = async () =>{
        const response = await fetch('../assets/categoryData.json')
        const data = await response.json();
        setCategories(data);


    }

    useEffect(() => {
            fetchCategory()
    }, [])

    const previousSlide = () =>{
        if(slide == 0){
            return false;
        }
        else{
            setSlide(0 )
        }
    }

    const nextSlide = () =>{
        if(slide > 13){
            return false;
        }
        else{
            setSlide(slide + 3.3)
        }
    }
    


  return (
    <div className='max-w-[1130px] mx-auto'>
    <div className='  flex items-center justify-between my-3'>
      <div className='text-2xl font-bold '>What's on your mind?</div>
      <div className='flex '>
        <div onClick={previousSlide} className='w-[30px] h-[30px] bg-[#e2e2e7]  rounded-full mx-[6px]'><FaArrowLeft className='items-center w-full h-full p-2 cursor-pointer'/></div>
        <div onClick={nextSlide} className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-[6px]'><FaArrowRight className='items-center w-full h-full p-2 cursor-pointer'/></div>
      </div>
      </div>
    <div className='flex overflow-hidden'>
        {
            data.map((cat, index) =>{
                return(
                    <div className='shrink-0 w-[155px] duration-500 ' key={index} style={{
                        transform: `translateX(-${slide * 100}%)`
                    }}>
                        <img src={cat.image} alt={cat.path} />
                        </div>
                )
            })
        }
    </div>
    <hr className='my-9 border-[1px]' />
    </div>
  )
}

export default Category
