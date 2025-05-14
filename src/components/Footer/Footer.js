import React from 'react'

export default function Footer() {
  return (
    <div className='bg-blue-100'>
      <div className='container grid lg:grid-cols-3 grid-cols-1 gap-10 place-content-center pt-16'>

        {/* block 1 */}

        <div className='lg:pr-10'>
          <img src="/svg/logo.svg" alt="" />
          <div className='mt-7 w-[70%] text-[14px]'>شرکت کارگزاری بانک تجارت از ابتدای خرداد ماه 1373 فعالیت خود را با عضویت در سازمان بورس و اوراق بهادار آغاز نمود.</div>
        </div>

        {/* block 2 */}

        <div className='lg:mr-24'>
          <h2 className='font-bold text-xl'>لینک‌های مرتبط</h2>
          <div className='flex flex-col gap-2 text-[14px] mt-8'>
            <div>کارگزاری بانک تجارت</div>
            <div>سامانه معاملات آنلاین</div>
            <div>سامانه معاملات آنلاین</div>
          </div>
        </div>

        {/* block 3 */}

        <div>
          <h2 className='font-bold text-xl'> ارتباط با ما</h2>
          <div className='flex flex-col w-[70%] gap-2 text-[14px] mt-8'>
            <div>آدرس : تهران، خیابان نلسون ماندلا، بالاتر از اسفندیار، کوچه شهید رحیمی، پلاک 4، ساختمان کارگزاری بانک تجارت</div>
            <div>تماس : ۰۲۱۴۲۷۶۴۰۰۰</div>
          </div>
        </div>


      </div>

      <div className='container mt-5'>
        <div className='w-full flex justify-center items-center py-10 font-bold'>طراحی و توسعه توسط شرکت پردازش اطلاعات آوید</div>
      </div>

    </div>
  )
}
