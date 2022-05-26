import React from 'react';
import cover1 from '../../Image/bn3.2.webp'
import cover2 from '../../Image/bn3.1.webp'
import '../../customStyle.css'

const Banner = () => {
    return (
<div class="h-screen flex">
    <div className='cover-1  lg:h-screen flex justify-center items-end'>
        <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold mb-2 text-[#333333]'>Premium Forks</h1>
            <h2 className='text-3xl mb-2 font-semibold text-[#B2A096]'>$70.00</h2>
            <button className='btn-1'>BUY NOW</button>
        </div>
    </div>
    <div className='cover-2 hidden lg:block'>

    </div>
</div>
    );
};

export default Banner;