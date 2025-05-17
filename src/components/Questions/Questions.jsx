import React from 'react'

export default function Questions() {
    return (
        <div className='py-8 px-4'>
            <div className="space-y-8 text-right">
                <h1 className="text-4xl font-bold">پرسش‌های متداول</h1>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">چگونه عضو باشگاه شویم؟</h2>
                    <p className="text-xl text-justify leading-relaxed">
                        اگر از قبل مشتری کارگزاری هستید، می‌توانید تنها با ثبت‌نام در باشگاه از کلیه خدمات ما بهره‌مند شوید.
                        اما اگر تاکنون موفق به عضویت در شرکت کارگزاری بانک آینده نشده‌اید، می‌توانید جهت فعالیت و کسب امتیاز در باشگاه
                        به یکی از شعب کارگزاری مراجعه نمایید و عضو خانواده بزرگ کارگزاری بانک آینده شوید.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <ul>
                            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
                                <a>چگونه امتیاز بگیریم؟</a>
                                <i className="fas fa-chevron-down text-gray-500"></i>
                            </li>
                            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
                                <a>چگونه از امتیاز بهره‌مند شویم؟</a>
                                <i className="fas fa-chevron-down text-gray-500"></i>
                            </li>
                            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
                                <a>چه زمانی امتیازات معاملات روز خود را می‌توانم مشاهده کنم؟</a>
                                <i className="fas fa-chevron-down text-gray-500"></i>
                            </li>
                            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
                                <a>چگونه از امتیازم بهره‌مند شوم؟</a>
                                <i className="fas fa-chevron-down text-gray-500"></i>
                            </li>
                            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
                                <a>آیا تنها معاملاتی که به‌صورت آنلاین انجام می‌شوند شامل امتیاز هستند؟</a>
                                <i className="fas fa-chevron-down text-gray-500"></i>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <img src="/img/question.svg" alt="پشتیبانی" className="w-full max-w-md mx-auto my-4 rounded-md" />
                        <p className="text-lg font-medium mt-2">سوالات بیشتری دارید؟</p>
                        <p className="text-lg text-gray-700">با 021-2486847 تماس بگیرید</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
