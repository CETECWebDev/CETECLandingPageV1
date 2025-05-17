import React from 'react'

export default function Header() {
  return (

    <div className='bg-pink-200'>

      <div className='container py-5'>

        {/* Top Part Start */}

        <div className='w-full flex justify-between items-center px-5'>
          <div><img className='w-[clamp(100px,10dvw,190px)]' src="/img/cetec.png" alt="" /></div>
          <div className='flex justify-center items-center gap-2 sm:gap-3 md:gap-5 text-[clamp(10px,0.9dvw,25px)] font-bold'>
            <button className='border-2 px-3 py-2 rounded-md border-red-500 text-red-500 cursor-pointer'>ثبت نام کنید </button>
            <button className='border-2 px-3 py-2 rounded-md border-green-500 text-green-500 cursor-pointer'> وارد شوید </button>
          </div>
        </div>

        {/* Top Part End */}


        {/* Top Part Start */}

        <div className='flex flex-col md:flex-row justify-center items-center w-full mt-10 px-10'>

          <div className='md:w-1/2 w-full flex flex-col gap-5 items-center sm:items-start'>
            <div className='font-bold text-[clamp(14px,3dvw,40px)]'>باشگاه مشتریان کارگزاری بانک تجارت</div>
            <div className='font-semibold text-[clamp(12px,2dvw,25px)]'>فرصتی برای قدردانی از وفاداری مشتریان</div>
            <div className='text-[clamp(10px,1dvw,20px)] w-[70%]'>
              برای ارائه خدمات به‌روز و قدردانی از وفاداری شما مشتری عزیز، باشگاه مشتریان کارگزاری بانک تجارت راه‌اندازی شده است. شما می‌توانید بر حسب فعالیت معاملاتی خود و سایر خدمات قابل ارائه توسط این شرکت از مزایا آن شامل جوایز نقدی و غیر نقدی، اطلاع رسانی و اشتراک اطلاعات بورسی و ... استفاده نمائید.
            </div>
            <div>
              <button className='cursor-pointer bg-green-700 text-white rounded-md px-5 py-3 text-[clamp(12px,1dvw,24px)]'>وارد شوید</button>
            </div>
          </div>


          <img className='md:w-1/2 w-full block' src="/headerIMG.png" alt="" />

        </div>


        {/* Top Part End */}

      </div>

    </div>

  )
}
