import React from 'react';
const ExploreWorld = () => {
    return (
        <div className='text-white bg-center bg-no-repeat bg-slate-300 bg-blend-multiply bg-cover h-[500px] relative' style={{ backgroundImage: "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg')" }}>
            <div>
                <div className='text-center my-8 space-y-3'>
                    <p className='lg:text-7xl text-5xl font-bold'>Explore The World</p>
                    <p className='lg:text-4xl text-2xl'>People Don’t Take, Trips Take People</p>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 bg-white text-black rounded shadow-xl max-w-7xl lg:mx-60 absolute -bottom-12 lg:py-8 py-3 px-3 lg:px-9'>
                    <div className='space-y-3'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/3037/3037818.png" alt="" />
                            <div>
                                <p className='text-gray-500 text-lg'>Destinations</p>
                                <p className='text-lg font-bold'>Locations</p>
                            </div>
                        </div>
                        <hr className='text-2xl' />

                    </div>
                    <div className='space-y-3'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/4750/4750549.png" alt="" />
                            <div>
                                <p className='text-gray-500 text-lg'>Activity</p>
                                <p className='text-lg font-bold'>Bookings</p>
                            </div>
                        </div>
                        <hr className='text-2xl' />
                    </div>
                    <div className='space-y-3'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/833/833593.png" alt="" />
                            <div>
                                <p className='text-gray-500 text-lg'>Date</p>
                                <p className='text-lg font-bold'>From</p>
                            </div>
                        </div>
                        <hr className='text-2xl' />
                    </div>
                    <div className='space-y-3'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" />
                            <div>
                                <p className='text-gray-500 text-lg'>Guest</p>
                                <p className='text-lg font-bold'>0</p>
                            </div>
                        </div>
                        <hr className='text-2xl' />
                    </div>
                    <input className='border-2 border-black rounded px-3 bg-green-600 text-white font-bold' type="search" name="search" placeholder='Search' id="" />
                </div>
            </div>
        </div>
    );
};

export default ExploreWorld;