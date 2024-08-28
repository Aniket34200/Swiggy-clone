import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiBagSimpleLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Header.css'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }

    const hideSideMenu =  () =>{
        setToggle(false);
    }

    const links = [
        {   icons : <PiBagSimpleLight size={23} />,
            iconName: "Swiggy Corporate"
        },
        {   icons: <IoIosSearch size={23}/>,
            iconName :"Search"
        },
        {   icons: <RiDiscountPercentLine size={23} />,
            iconName: "Offers",
            sup : "New"
        },
        {   icons: <IoHelpBuoyOutline size={23}/>,
            iconName: "Help"
        },
        {   icons : <MdPersonOutline size={23}/>,
            iconName : "Sign In"
        },
        {   icons : <MdOutlineShoppingCart size={23} />,
             iconName : "Cart",
             items : "0"
        }
    ]

  return (
    <>
        <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
            opacity: toggle?1:0,
            visibility: toggle?"visible":"hidden"
        }}>
            <div onClick={(e)=>e.stopPropagation()} className='bg-white w-[600px] h-full duration-[600ms] absolute' style={{
                left: toggle? '0%' : '-100%'  //transition property are applied because of this....
            }}>
            </div>
        </div>

        <header className=" shadow-md sticky top-0 bg-white z-20">
            <div className='max-w-[1260px] mx-auto flex justify-between'>
            <div className='flex items-center '>
                <div className='h-[100%] flex align-middle'>
                    <img src="/public-images/logo.png" alt=""  className='w-[80px] p-[7px]'/>
                </div>
                <div onClick={showSideMenu} className='text-[13px] font-bold flex items-center font-["Poppins"] text-[#3d4152] pl-5 underline underline-offset-8 decoration-[1.5px] hover:text-[#FF5B0E]'>
                    Other
                </div>
                <div className='flex items-center'>
                    <RiArrowDropDownLine fontSize={35}  className=' text-[#FF5B0E] mx-[6px] cursor-pointer ' onClick={showSideMenu}/>
                </div>
                </div>
                <ul className='flex  gap-8'>
                    {
                        links.map((link, index) =>{
                            return (
                                <li className='flex h-full gap-2 justify-center items-center font-medium text-[16px] px-[3px] hover:text-[#FF5B0E]' key={index}>
                                    {link.icons}
                                    {link.iconName}
                                    <sup className='text-[#ffa700]'>
                                        {link.sup}
                                        {link.items}
                                    </sup>
                                </li>
                            )
                        })
                    }
                </ul>
            
            </div>
        </header>
    </>
  )
}

export default Header
