import Image from 'next/image';
import React from 'react';

const Achievements = () => {
    return (
        <div className='max-w-7xl mx-auto my-20 '>
            <div className=''>
                <div className='text-center'>
                    <h1 className='text-8xl font-bold tracking-widest mb-5'>ACHIEVEMENTS</h1>
                </div>
                <div className='flex justify-between'>
                    <div className='text-center border py-10 px-16 space-y-5 rounded-md shadow-xl'>
                        <img className='border rounded-full p-4 bg-green-100 text-green-300 transition ease-in-out delay-150 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/5730/5730094.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>3500+</span>
                        <p className='text-gray-500 text-xl'>Happy Traveler</p>
                    </div>
                    <div className='text-center border py-10 px-16 space-y-5  rounded-md shadow-xl'>
                        <img className='border rounded-full p-4 bg-green-100 text-green-300 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/5730/5730094.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>3500+</span>
                        <p className='text-gray-500 text-xl'>Happy Traveler</p>
                    </div>
                    <div className='text-center border py-10 px-16 space-y-5 rounded-md shadow-xl'>
                        <img className='border rounded-full p-4 bg-green-100 text-green-300 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/5730/5730094.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>3500+</span>
                        <p className='text-gray-500 text-xl'>Happy Traveler</p>
                    </div>
                    <div className='text-center border py-10 px-16 space-y-5 rounded-md shadow-xl'>
                        <img className='border rounded-full p-4 bg-green-100 text-green-300 hover:bg-green-500 hover:scale-110 mb-5' src="https://cdn-icons-png.flaticon.com/128/5730/5730094.png" alt="" />
                        <span className='text-5xl font-bold mt-4'>3500+</span>
                        <p className='text-gray-500 text-xl'>Happy Traveler</p>
                    </div>
                </div>
            </div>
            <div className='bg-green-50 flex'>
                <div className='w-2/5 pt-64'>
                    <span className='text-green-500 bg-green-50 border px-4 py-2 rounded'>Our Testimonials</span>
                    <p>What they’re talking about our policy</p>
                    <p>Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry has been.</p>
                    <button>All Testimonials</button>
                </div>
                <div className='3/5 pt-64'>
                    <h1>Testimonials</h1>
                </div>
            </div>
        </div>
    );
};

export default Achievements;