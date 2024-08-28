import React from 'react'

const Download = () => {

  return (
    <div className='bg-[#F0F0F5]'>
      <div className="max-w-[1130px] mx-auto flex items-center justify-around py-3 ">
        <div className='text-[28px] font-extrabold text-[#3D4046]'>For better experience, download<div> the Swiggy app now</div></div>
        <div className='flex '>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target='_blank'>
            <img  className='mr-6 cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" width={200} alt="" />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920" target='_blank'>
            <img className='cursor-pointer' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" width={200} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Download
