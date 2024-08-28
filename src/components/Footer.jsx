import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-black '>
    <div className='grid grid-cols-4 max-w-[1130px] mx-auto gap-4 pt-8 pb-[80px]'>
    <div>
      <div className='flex items-center gap-2'>
        <img src="/public-images/footerlogo.svg" alt="swiggy logo" />
        <div className='text-[22px] font-bold text-white'>Swiggy</div>
      </div>
      <div className='text-[#ffffff99] text-[16px] font-medium w-[230px] text-wrap mt-2'> 
        © 2024 Bundl technologies Pvt. Ltd
      </div>
    </div>
    
    <div>
        <div className='text-[18px] font-semibold mb-2 text-white'>Company</div>
        <ul className='flex flex-col gap-2'>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>About</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Carrers</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Team</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Swiggy One</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Swiggy Instamart</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'> Swiggy Genie</li>
        </ul>
    </div>

    <div>
        <div>
            <div className='text-[18px] font-semibold text-white mb-2'>Contact us</div>
            <ul className='pb-10 flex flex-col gap-2'>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Help & Support</li>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Patner with us</li>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Ride with us</li>
            </ul>

            <div className='text-[18px] font-semibold text-white mb-2'>Legal</div>
            <ul className='flex flex-col gap-2'>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer '>Terms & Conditions</li>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Cookie Policy</li>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Privacy Policy</li>
                <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer '>Investor Relations</li>
            </ul>
        </div>
    </div>

    <div>
        <div className='text-[18px] font-semibold text-white mb-2'>We deliver to:</div>
        <ul className='flex flex-col gap-2'>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Bangalore</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Gurgaon</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Hyderabad</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Delhi</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Mumbai</li>
            <li className='text-[#ffffff99] text-[16px] font-medium cursor-pointer'>Pune</li>
        </ul>
        <button className='text-[#ffffff99] mt-2 text-[16px] font-medium '>589 cities </button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Footer
