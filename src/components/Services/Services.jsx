import React from 'react'

export default function Services() {
  return (
    <div className='py-8 px-4'>
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">مسابقات و قرعه‌کشی‌ها</h1>
            <p className="text-xl text-justify leading-relaxed">
              جهت جذابیت بیشتر مسابقات برای شما مشتری عزیز سعی کردیم تا مسابقات پیش‌بینی در چند سطح با هزینه
              (رایگان، ثابت و شناور) برگزار گردد. همچنین سعی ما بر آن است تا با برگزاری مسابقات متنوع از جمله
              (بازار سرمایه، مسابقات ورزشی و ...) بتوانیم ضمن ارائه خدمات بهتر موجبات رضایت شما مشتریان عزیز را فراهم آوریم.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex justify-center items-center">
            <img src="/img/img1.jpg" alt="سوالات متداول" className="w-full max-w-md rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div className="bg-white p-6 rounded-lg shadow flex justify-center items-center">
            <img src="/img/img2.jpg" alt="شبکه کاربران" className="w-full max-w-md rounded-md" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">شبکه کاربران</h1>
            <p className="text-xl text-justify leading-relaxed pl-4">
              در باشگاه آینده برای ارائه خدمات به‌روز و قدردانی از وفاداری شما مشتری عزیز، امکانات فراوانی در نظر گرفته شده است.
              یکی از این راه‌ها توسعه شبکه کاربران می‌باشد. شما کاربران عزیز می‌توانید برای کسب امتیاز بیشتر و افزایش درآمد خود در باشگاه از این امکان استفاده نمایید.
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}
