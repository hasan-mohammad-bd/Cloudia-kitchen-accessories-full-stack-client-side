import React from 'react';

const AboutUs = () =>  {
    return (
<div class="h-screen flex">
    <div className='cover-3   hidden lg:block'>
    </div>
    <div className='cover-4 lg:h-screen flex justify-center items-center flex'>
        <div className='p-16'>
        <h1 className='text-3xl font-bold mb-2 text-[#333333]'>About Us</h1>
        <div className='line w-24 mt-1 mb-16'></div>
            <h2 className='line-h mb-2 text-[#B2A096]'>We are kitchen accessories manufacturer for last 29 years. We are highly experience. We worked with several company and also worked with individual customer. We gained vast knowledge about the product we make. We provide mostly wholesale  around the globe</h2>
            <button className='btn-1'>LEARN MORE</button>
        </div>
    </div>
</div>
    );
};

export default AboutUs;